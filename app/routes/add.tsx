import {
  Accordion,
  Anchor,
  Button,
  Flex,
  Input,
  Paper,
  Text,
} from "@mantine/core";

export default function Index() {
  return (
    <Paper radius="0" shadow="xs" bg={"white"} p={40}>
      <Flex>
        <Input placeholder="検索キーワード" mr={8}></Input>
        <Button>保存</Button>
      </Flex>
    </Paper>
  );
}
