"use client";

import React, { useState } from "react";
import clsx from "clsx";
import {
  CircleEllipsis,
  ClipboardCheck,
  House,
  Inbox,
  LayoutDashboard,
  MessageSquareMore,
  PanelRightOpen,
  Plus,
  Presentation,
  type LucideIcon,
} from "lucide-react";
import SidebarLink from "../SidebarLinks";
import { ActionIcon } from "@mantine/core";
import CreateSpaceModals from "../modals";

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
          expanded ? "max-w-52" : "max-w-11"
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

      <CreateSpaceModals
        createModalOpen={createModalOpen}
        setCreateModalOpen={setCreateModalOpen}
        secondModalOpen={secondModalOpen}
        setSecondModalOpen={setSecondModalOpen}
      />
    </>
  );
}
