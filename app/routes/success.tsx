import type { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";
import { authenticator } from "~/services/auth.server";
import { AuthUserType } from "~/type/AuthUser";

export const loader: LoaderFunction = async ({
  request,
}: LoaderFunctionArgs) => {
  const user = await authenticator.isAuthenticated(request);
  if (!user) {
    // 未ログインのユーザーはログインページにリダイレクト
    return redirect("/login");
  }
  return json<LoaderData>({
    user,
  });
};

type LoaderData = {
  user: AuthUserType;
};

export default function SuccessIndex() {
  const { user } = useLoaderData() as LoaderData;

  // ユーザ登録APIの呼び出し処理を定義
  const insertUserApi = async () => {
    try {
      // ユーザ登録apiを実行する
      const response = await fetch('/api/insertUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          // id: user.id,  // ログインしたユーザーのidをリクエストボディに設定
          email: user.email, // ログインしたユーザーのメールアドレスをリクエストボディに設定
        }),
      });

      // HTTPレスポンスが正常ではない場合
      if (!response.ok) {
        throw new Error('api.insertUserでエラー');
      }

      // APIからのレスポンスを取得し、ログに出力
      const data = await response.json();
      console.log('APIレスポンス:', data);
    } catch (error) {
      console.error('APIへのリクエスト送信中にエラーが発生しました:', error);
    }
  };

  // ログインに成功し、コンポーネントのマウント時のみユーザ登録APIを呼び出す
  React.useEffect(() => {
    insertUserApi();
  }, []);

  return (
    <>
      <h1>Hello {user.name}さん</h1>
      <img src={user.image} alt={user.name} />
      <div>ログイン成功しました。</div>
      <div>
        <form action="/logout" method="post">
          <button type="submit">ログアウト</button>
        </form>
      </div>
    </>
  );
}
