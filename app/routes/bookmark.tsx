import { Accordion, Anchor, Button, Paper, Text } from "@mantine/core";
import { useEffect, useState } from "react";

type BookmarkType = {
  searchWord: string;
  links: string[];
};

export default function Index() {
  const [bookmark, setBookmark] = useState<BookmarkType | null>(null);

  useEffect(() => {
    const storedBookmark = localStorage.getItem("bookmark");
    if (storedBookmark) {
      setBookmark(JSON.parse(storedBookmark));
    }
  }, []);

  const handleDelete = () => {
    localStorage.removeItem("bookmark");
    setBookmark(null);
  };

  const data = [
    {
      title: "アンパンマンの検索履歴",
      history: [
        {
          emoji: "🍎",
          value: "検索1",
          link: "https://www.anpanman.jp/",
        },
        {
          emoji: "🍌",
          value: "検索2",
          link: "https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%B3%E3%83%91%E3%83%B3%E3%83%9E%E3%83%B3",
        },
        {
          emoji: "🥦",
          value: "検索3",
          link: "https://www.yokohama-anpanman.jp/",
        },
      ],
    },
    {
      title: "ダンベルの検索履歴",
      history: [
        {
          emoji: "🍎",
          value: "検索1",
          link: "https://happyhotel.jp/",
        },
        {
          emoji: "🍌",
          value: "検索2",
          link: "https://couples.jp/prefectures/via-hotelareas",
        },
      ],
    },
  ];

  const items = data.map((item, index) => (
    <Paper key={index} shadow="xs" p="xl" mb={16} bg={"white"} withBorder>
      <Text>{item.title}</Text>
      {item.history.map((h, index) => (
        <Accordion key={index} defaultValue="Apples">
          <Accordion.Item key={h.value} value={h.value}>
            <Accordion.Control icon={h.emoji}>{h.value}</Accordion.Control>
            <Accordion.Panel>
              <Anchor href={h.link}>{h.link}</Anchor>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      ))}
    </Paper>
  ));

  const bookmarkList = (
    <Paper shadow="xs" p="xl" mb={16} bg={"white"} withBorder>
      <Text>{bookmark?.searchWord}</Text>
      {bookmark?.links.map((link, index) => (
        <Accordion key={index} defaultValue="Apples">
          <Accordion.Item key={index} value={link + index}>
            <Accordion.Control>{link}</Accordion.Control>
            <Accordion.Panel>
              <Anchor href={link}>{link}</Anchor>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      ))}
    </Paper>
  );

  return (
    <Paper radius="0" shadow="xs" bg={"white"} p={40}>
      {bookmark ? bookmarkList : items}
      <Button bg="red" onClick={handleDelete}>
        削除
      </Button>
    </Paper>
  );
}
