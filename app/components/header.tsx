import { Anchor, Button, Flex, Paper, Text, Image } from "@mantine/core";
import { Form } from "@remix-run/react";
import { AuthUserType } from "~/services/auth.server";

export function Header(props: { auth: AuthUserType }) {
  const AuthButton = () => {
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
  };

  const AuthImage = () => {
    if (props.auth) {
      return (
        <Image
          src={props.auth.image}
          alt={props.auth.name}
          h={40}
          radius="xl"
        />
      );
    }
  };

  return (
    <Paper radius="0" shadow="xl" h={50} bg={"white"} pr={48} withBorder>
      <Flex
        mih={50}
        gap="md"
        justify="flex-end"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Text ta="center">
          <Anchor href="/" c="black" underline="never">
            トップ
          </Anchor>
        </Text>
        <Text ta="center">
          <Anchor href="/bookmark" c="black" underline="never">
            一覧
          </Anchor>
        </Text>
        <Text ta="center">
          <Anchor href="/add" c="black" underline="never">
            追加
          </Anchor>
        </Text>
        <AuthButton />
        <AuthImage />
      </Flex>
    </Paper>
  );
}
