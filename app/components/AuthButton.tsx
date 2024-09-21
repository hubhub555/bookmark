import { Button } from "@mantine/core";
import { Form } from "@remix-run/react";
import { AuthUserType } from "~/services/auth.server";

export function AuthButton(props: { auth: AuthUserType }) {
  if (!props.auth) {
    return (
      <Form action="/auth/google" method="post">
        <Button type="submit" radius="xl">
          ログイン
        </Button>
      </Form>
    );
  } else if (props.auth) {
    return (
      <Form action="/logout" method="post">
        <Button type="submit" radius="xl">
          ログアウト
        </Button>
      </Form>
    );
  }
}
