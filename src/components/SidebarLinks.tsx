"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type SidebarLinkProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export default function SidebarLink({ href, label, icon }: SidebarLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center gap-3 p-2 rounded transition-colors",
        isActive
          ? "bg-blue-200 text-blue-800 hover:bg-gray-200"
          : "text-gray-800 hover:bg-gray-200 active:bg-blue-200"
      )}
    >
      <span className="w-5 h-5">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}
