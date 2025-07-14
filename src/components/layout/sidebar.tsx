import React from "react";
import clsx from "clsx";
import {
  CircleEllipsis,
  ClipboardCheck,
  Inbox,
  InboxIcon,
  LayoutDashboard,
  MessageSquareMore,
  PanelRightOpen,
  Presentation,
} from "lucide-react";
import Link from "next/link";
import SidebarLink from "../SidebarLinks";
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
        "bg-gray-100 h-full w-full",
        expanded ? "max-w-50" : "max-w-10"
      )}
    >
      <div className="flex justify-end p-2">
        <button type="button" onClick={toggleSidebar}>
          <PanelRightOpen />
        </button>
      </div>

      <div className="mx-3 flex flex-col space-y-2">
        <SidebarLink href="/inbox" label="Inbox" icon={<InboxIcon />}>
          <span>Inbox</span>
        </SidebarLink>

        <SidebarLink
          href="/chat"
          label="Chat"
          icon={<MessageSquareMore />}
        ></SidebarLink>

        <SidebarLink
          href="/dashboard"
          label="Dashboard"
          icon={<LayoutDashboard />}
        ></SidebarLink>
        <SidebarLink
          href="/whiteboards"
          label="Whiteboards"
          icon={<Presentation />}
        ></SidebarLink>
        <SidebarLink
          href="/forms"
          label="Forms"
          icon={<ClipboardCheck />}
        ></SidebarLink>

        <SidebarLink
          href="/more"
          label="More"
          icon={<CircleEllipsis />}
        ></SidebarLink>
      </div>
    </div>
  );
}
