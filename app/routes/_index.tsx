import { Anchor, Button, Container, Flex } from "@mantine/core";
import { useNavigate } from "@remix-run/react";

export default function Index() {
  const navigate = useNavigate();

  return (
    <Container>
      <Flex mt={40}>
        <Button
          mr={16}
          onClick={() => {
            navigate("/add");
          }}
        >
          追加
        </Button>
        <Button
          onClick={() => {
            navigate("/bookmark");
          }}
        >
          <Anchor href="/bookmark" c="white" underline="never">
            一覧
          </Anchor>
        </Button>
      </Flex>
    </Container>
  );
}
