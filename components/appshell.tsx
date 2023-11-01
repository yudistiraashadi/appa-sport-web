"use client";

import { useDisclosure } from "@mantine/hooks";
import {
  ActionIcon,
  AppShell,
  Burger,
  Divider,
  Group,
  Menu,
  NavLink,
  Text,
  Button,
  UnstyledButton,
  Box,
} from "@mantine/core";
import {
  IconHome,
  IconUsersGroup,
  IconTicTac,
  IconStretching,
  IconUserSearch,
  IconLock,
  IconBell,
  IconUserCircle,
} from "@tabler/icons-react";

import { logout } from "@/app/dashboard/_actions";

import { usePathname } from "next/navigation";

import Link from "next/link";

function UserAvatar() {
  return (
    <Menu width={150} shadow="md">
      <Menu.Target>
        <Button
          variant="subtle"
          color="dark"
          leftSection={<IconUserCircle stroke={1.5} />}
          px={"0.25rem"}
        >
          {/* <Avatar
              component="Image"
              src={user.image}
              alt={user.name}
              radius="xl"
              size={20}
            /> */}

          <Text fw={500} size="sm" lh={1}>
            Kediri FC
          </Text>
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Profile</Menu.Item>

        <form action={logout}>
          <Menu.Item type="submit" color="red">
            Logout
          </Menu.Item>
        </form>
      </Menu.Dropdown>
    </Menu>
  );
}

export function DashboardAppShell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  const pathname = usePathname();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <div className="flex w-full justify-between items-center">
            {/* burger menu and brand logo */}
            <div className="flex items-center space-x-2">
              <Burger opened={opened} hiddenFrom="sm" size="sm" />

              <UnstyledButton
                hiddenFrom="sm"
                onClick={toggle}
                className="font-semibold text-xl"
              >
                APPA
              </UnstyledButton>

              <Box
                visibleFrom="sm"
                onClick={toggle}
                className="font-semibold text-xl"
              >
                APPA
              </Box>
            </div>

            {/* user and notification */}
            <div className="flex items-center space-x-1">
              <ActionIcon
                size={"2.25rem"}
                variant="subtle"
                aria-label="Notification"
                radius={9999}
                color="dark"
              >
                <IconBell stroke={1.5} />
              </ActionIcon>

              <UserAvatar />
            </div>
          </div>
        </Group>
      </AppShell.Header>

      {/* sidebar */}
      <AppShell.Navbar p="xs">
        <NavLink
          label="Profil Tim"
          component={Link}
          href="/dashboard"
          active={pathname === "/dashboard"}
          leftSection={<IconHome size="1.25rem" stroke={1.5} />}
          // childrenOffset={32}
        />

        <NavLink
          label="Daftar Pemain"
          leftSection={<IconUsersGroup size="1.25rem" stroke={1.5} />}
          // childrenOffset={32}
        />

        <NavLink
          label="Strategi"
          leftSection={<IconTicTac size="1.25rem" stroke={1.5} />}
          // childrenOffset={32}
        />

        <NavLink
          label="Drill Latihan"
          leftSection={<IconStretching size="1.25rem" stroke={1.5} />}
          // childrenOffset={32}
        />

        <div className="flex justify-between items-center pr-4">
          <NavLink
            disabled
            label="Scout"
            leftSection={<IconUserSearch size="1.25rem" stroke={1.5} />}
            // childrenOffset={32}
          />
          <IconLock
            size="1.25rem"
            stroke={1.5}
            color="var(--mantine-color-violet-6)"
          />
        </div>

        {/* divider */}
        <Divider my="md" mx="md" opacity={"70%"} />

        <NavLink
          label="Langganan"
          // childrenOffset={32}
        />

        <NavLink
          label="Pengaturan"
          // childrenOffset={32}
        />
      </AppShell.Navbar>
      <AppShell.Main bg={"gray.0"}>{children}</AppShell.Main>
    </AppShell>
  );
}
