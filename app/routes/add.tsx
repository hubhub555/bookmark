import { useState } from "react";
import { Button, Flex, Input, Paper } from "@mantine/core";

export default function Index() {
  const [inputs, setInputs] = useState<string[]>([""]);

  const addInput = () => {
    setInputs([...inputs, ""]);
  };

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };
  return (
    <Paper radius="0" shadow="xs" bg={"white"} p={40}>
      <Flex>
        <Input placeholder="検索キーワード" mr={8}></Input>
        <Button onClick={addInput}>+</Button>
      </Flex>
      <Flex
        mih={50}
        mt={16}
        gap="md"
        justify="flex-start"
        align="flex-start"
        direction="column"
      >
        {inputs.map((input, index) => (
          <Input
            key={index}
            type="text"
            value={input}
            placeholder={"リンク" + (index + 1)}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
        <Button>保存</Button>
      </Flex>
    </Paper>
  );
}
