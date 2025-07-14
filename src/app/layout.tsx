import type { Metadata } from "next";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";

import "@mantine/core/styles.css";
import "./globals.css";
import AppShell from "@/components/layout/shell";

export const metadata: Metadata = {
  title: "Clickup Clone",
  description: "Clickup clone for unitfactor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>

      <body>
        <MantineProvider>
          <main>
            <AppShell>{children}</AppShell>
          </main>
        </MantineProvider>
      </body>
    </html>
  );
}
