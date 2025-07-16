import React from "react";
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
import { ActionIcon } from "@mantine/core";

type SidebarLinkItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const sidebarLinks: SidebarLinkItem[] = [
  { href: "/home", label: "Home", icon: House },
  { href: "/inbox", label: "Inbox", icon: Inbox },
  { href: "/chat", label: "Chat", icon: MessageSquareMore },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/whiteboards", label: "Whiteboards", icon: Presentation },
  { href: "/forms", label: "Forms", icon: ClipboardCheck },
  { href: "/more", label: "More", icon: CircleEllipsis },
  { href: "/create", label: "Create Space", icon: Plus },
];

export default function Sidebar({
  expanded,
  toggleSidebar,
}: {
  expanded: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <div
      id="sidebar"
      className={clsx(
        "bg-white h-full w-full transition-all duration-200 overflow-hidden",
        expanded ? "max-w-52" : "max-w-13"
      )}
    >
      <div className="flex justify-end p-2">
        <ActionIcon
          size={"lg"}
          variant="subtle"
          type="button"
          radius={"md"}
          onClick={toggleSidebar}
        >
          <PanelRightOpen className="cursor-pointer w-4/6 h-4/6 text-neutral-500" />
        </ActionIcon>
      </div>

      <div className="px-2 flex flex-col space-y-2">
        {sidebarLinks.map(({ href, label, icon }) => (
          <SidebarLink
            expanded={expanded}
            key={href}
            href={href}
            label={label}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
}
