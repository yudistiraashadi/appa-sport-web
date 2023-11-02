"use client";

import {
  TextInput,
  PasswordInput,
  Anchor,
  Button,
  Flex,
  Alert,
} from "@mantine/core";
import { useFormState, useFormStatus } from "react-dom";
import { IconInfoCircle } from "@tabler/icons-react";
import Link from "next/link";

import { login } from "./_actions";

function LoginSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" fullWidth mt="xl" radius={"md"} loading={pending}>
      Login
    </Button>
  );
}

export function LoginForm() {
  const [state, formAction] = useFormState(login, {});

  return (
    <form action={formAction}>
      {state?.error?.general && (
        <Alert variant="light" color="red" icon={<IconInfoCircle />} mb="1rem">
          {state.error.general}
        </Alert>
      )}

      <TextInput
        label="Email"
        styles={{
          input: { backgroundColor: "var(--mantine-color-gray-0)" },
        }}
        name="email"
        error={state?.error?.email}
      />

      <PasswordInput
        label="Password"
        styles={{
          input: { backgroundColor: "var(--mantine-color-gray-0)" },
        }}
        mt={"1rem"}
        name="password"
        error={state?.error?.password}
      />

      <div>email: distra96@yahoo.com</div>
      <div>pass: asdfasdf</div>

      <Flex justify="end" mt={"1.5rem"}>
        <Anchor component={Link} href={"#"} size="sm">
          Lupa Password?
        </Anchor>
      </Flex>

      <LoginSubmitButton />
    </form>
  );
}
