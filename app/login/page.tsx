import { Paper, Title, Flex } from "@mantine/core";

import { LoginForm } from "./_forms";

export default function Login() {
  return (
    <Flex
      direction={"column"}
      justify={"center"}
      align={"center"}
      mih={"100vh"}
      py={"0.5rem"}
      bg={"gray.0"}
    >
      <Title ta="center" w={600} mb={"2rem"}>
        APPA Sport
      </Title>

      <Paper withBorder shadow="md" p={"2rem"} radius="md" className="md:w-80">
        <LoginForm />
      </Paper>
    </Flex>
  );
}
