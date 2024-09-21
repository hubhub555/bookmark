import { Button, Flex, Input, Paper } from "@mantine/core";
import { useState } from "react";

export default function Index() {
  const [searchWord, setSerachWord] = useState<string>("");
  const [inputs, setInputs] = useState<string[]>([""]);

  const addInput = () => {
    setInputs([...inputs, ""]);
  };

  const handleSetSerachWord = (searchWord: string) => {
    setSerachWord(searchWord);
  };

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  // 入力値をローカルストレージに保存する関数
  const saveToLocalStorage = (searchWord: string, inputs: string[]) => {
    const bookmark = {
      searchWord,
      links: inputs,
    };
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
    alert("入力値がローカルストレージに保存されました!");
  };
  return (
    <Paper radius="0" shadow="xs" bg={"white"} p={40}>
      <Flex>
        <Input
          placeholder="検索キーワード"
          mr={8}
          value={searchWord}
          onChange={(e) => handleSetSerachWord(e.target.value)}
        ></Input>
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
        <Button onClick={() => saveToLocalStorage(searchWord, inputs)}>
          保存
        </Button>
      </Flex>
    </Paper>
  );
}
