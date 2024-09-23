import { Anchor, Flex, Paper, Text } from "@mantine/core";
import { AuthUserType } from "~/type/AuthUser";
import { AuthButton } from "./AuthButton";
import { AuthImage } from "./AuthImage";

export function Header(props: { auth: AuthUserType }) {
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
        <AuthButton auth={props.auth} />
        <AuthImage auth={props.auth} />
      </Flex>
    </Paper>
  );
}
