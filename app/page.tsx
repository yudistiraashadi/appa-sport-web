import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Group,
  Button,
  Flex,
} from "@mantine/core";

export default function Home() {
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
        <TextInput
          label="Email"
          styles={{
            input: { backgroundColor: "var(--mantine-color-gray-0)" },
          }}
        />
        <PasswordInput
          label="Password"
          styles={{
            input: { backgroundColor: "var(--mantine-color-gray-0)" },
          }}
          mt={"1rem"}
        />

        <Group justify="space-between" mt={"1.5rem"}>
          <Checkbox label="Ingat saya" />
          <Anchor component="button" size="sm">
            Lupa Password?
          </Anchor>
        </Group>

        <Button fullWidth mt="xl" radius={"md"}>
          Login
        </Button>
      </Paper>
    </Flex>
  );
}
