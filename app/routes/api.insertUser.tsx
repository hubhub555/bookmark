import { PrismaClient } from "@prisma/client";
import { json, type ActionFunction } from "@remix-run/node";
import { UsersType } from "~/type/Users";

// usersの型定義
type LoaderData = {
  user: UsersType;
};

export const action: ActionFunction = async ({ request }) => {
    // データベースへの接続を確立
    const prisma = new PrismaClient();

    // リクエストのjsonをフォーマットしてデータを取得
    const formData = await request.formData();
    // const idString = formData.get("id") as string;
    // const id = parseInt(idString, 10);
    const email = formData.get("email") as string;

    try {
        // リクエストのemailがuserTBLにすでに存在しないか確認
        const existingUser = await prisma.users.findUnique({
            where: { email: email },
        });
        
        // リクエストのemailがuserTBLにすでに存在する場合はDBに登録せず返却
        if (existingUser) {
          return json({ message: "そのemailはすでにuserTBLに登録済みです" }, { status: 200 });
        }

        // 取得したidとemailをデータベースに挿入
        const newUser = await prisma.users.create({
          data: {
            // id,
            email,
          },
        });
    
        // LoaderData型に合わせて挿入した内容を設定
        const loaderData: LoaderData = { user: newUser };
        // 成功した場合のレスポンスを返す
        return json({ loaderData }, { status: 201 });
      } catch (error) {
        console.error("エラー:", error);
        // エラーが発生した場合のレスポンスを返す
        return json({ error: "ユーザの作成に失敗しました" }, { status: 500 });
      } finally {
        // データベースの接続を切断
        await prisma.$disconnect();
      }
};