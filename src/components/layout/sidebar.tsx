"use client";

import React, { useState } from "react";
import clsx from "clsx";
import {
  CircleEllipsis,
  ClipboardCheck,
  House,
  Inbox,
  LayoutDashboard,
  type LucideIcon,
  MessageSquareMore,
  PanelRightOpen,
  Plus,
  Presentation,
} from "lucide-react";
import SidebarLink from "../SidebarLinks";
import { ActionIcon, Modal, TextInput, Button, Text } from "@mantine/core";

type SidebarLinkItem = {
  href?: string;
  label: string;
  icon: LucideIcon;
  isAction?: boolean;
};

const sidebarLinks: SidebarLinkItem[] = [
  { href: "/home", label: "Home", icon: House },
  { href: "/inbox", label: "Inbox", icon: Inbox },
  { href: "/chat", label: "Chat", icon: MessageSquareMore },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/whiteboards", label: "Whiteboards", icon: Presentation },
  { href: "/forms", label: "Forms", icon: ClipboardCheck },
  { href: "/more", label: "More", icon: CircleEllipsis },
  { label: "Create Space", icon: Plus, isAction: true },
];

export default function Sidebar({
  expanded,
  toggleSidebar,
}: {
  expanded: boolean;
  toggleSidebar: () => void;
}) {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);

  return (
    <>
      <div
        id="sidebar"
        className={clsx(
          "bg-white h-full w-full transition-all duration-200 overflow-hidden",
          expanded ? "max-w-52" : "max-w-13"
        )}
      >
        <div className="flex justify-end p-2">
          <ActionIcon
            size="lg"
            variant="subtle"
            type="button"
            radius="md"
            onClick={toggleSidebar}
          >
            <PanelRightOpen className="cursor-pointer w-4/6 h-4/6 text-neutral-500" />
          </ActionIcon>
        </div>

        <div className="px-2 flex flex-col space-y-2">
          {sidebarLinks.map(({ href, label, icon: Icon, isAction }) =>
            isAction ? (
              <button
                key={label}
                onClick={() => setCreateModalOpen(true)}
                className={clsx(
                  "flex items-center gap-3 p-2 rounded text-left",
                  "hover:bg-gray-100 text-gray-800 w-full",
                  expanded ? "justify-start" : "justify-center"
                )}
              >
                <Icon className="w-5 h-5" />
                {expanded && <span>{label}</span>}
              </button>
            ) : (
              <SidebarLink
                expanded={expanded}
                key={href}
                href={href!}
                label={label}
                icon={Icon}
              />
            )
          )}
        </div>
      </div>

      <Modal
        opened={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        title="Create a Space"
        centered
      >
        <Text size="sm" className=" !text-neutral-500">
          A Space represents teams, departments, or groups, each with its own
          Lists, workflows, and settings.
        </Text>
        <TextInput
          className="mt-2 text-neutral-600"
          label="Icon & name"
          placeholder="e.g., Marketing, Engineering, HR"
        />
        <TextInput
          className="mt-5 text-neutral-600 "
          label={
            <span className="text-gray-700">
              Description{" "}
              <span className="text-xs text-gray-500">(optional)</span>
            </span>
          }
        />
        <Button
          color="teal"
          fullWidth
          mt="md"
          onClick={() => setCreateModalOpen(false)}
        >
          Continue
        </Button>
      </Modal>
      <Modal
        opened={secondModalOpen}
        onClose={() => setSecondModalOpen(false)}
        title="Configure Space"
        centered
      >
        <TextInput label="Description" placeholder="Optional description" />

        <div className="flex justify-between mt-lg-0">
          <Button
            variant="subtle"
            color="gray"
            onClick={() => {
              setCreateModalOpen(false);
              setSecondModalOpen(true);
            }}
          >
            Back
          </Button>

          <Button color="teal" onClick={() => setSecondModalOpen(false)}>
            Create Space
          </Button>
        </div>
      </Modal>
    </>
  );
}
