"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type LucideIcon } from "lucide-react";

type SidebarLinkProps = {
  href: string;
  label: string;
  icon: LucideIcon;
  expanded: boolean;
};

export default function SidebarLink({
  href,
  label,
  icon: Icon,
  expanded,
}: SidebarLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      data-expanded={expanded}
      className={
        "flex items-center gap-2 p-2 rounded-md transition-colors text-sm data-active:font-medium hover:bg-neutral-100 data-active:bg-teal-100 data-active:text-teal-700 data-active:hover:bg-neutral-100 "
      }
      {...(isActive && { "data-active": true })}
    >
      <Icon
        size={expanded ? 16 : 20}
        className="transition-all duration-200 shrink-0"
      />
      {expanded ? <span>{label}</span> : null}
    </Link>
  );
}
