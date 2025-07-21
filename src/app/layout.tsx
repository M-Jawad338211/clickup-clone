import type { Metadata } from "next";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";

import "@mantine/core/styles.css";
import "./globals.css";
import AppShell from "@/components/layout/shell";

import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

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

      <body className={`${inter.variable} font-sans antialiased`}>
        <MantineProvider>
          <main>
            <SessionProvider>
              <AppShell>{children}</AppShell>
            </SessionProvider>
          </main>
        </MantineProvider>
      </body>
    </html>
  );
}
