import { MantineProvider, Paper, Text, Accordion, Anchor } from "@mantine/core";
import "@mantine/core/styles.css";

export default function Index() {
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
    <Paper key={index} shadow="xs" p="xl" bg={"white"}>
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

  return (
    <MantineProvider>
      <Paper shadow="xs" p="xl" bg={"white"}>
        {items}
      </Paper>
    </MantineProvider>
  );
}
