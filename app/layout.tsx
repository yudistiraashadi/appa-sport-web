import type { Metadata } from "next";
import "./globals.css";
import { GeistMono, GeistSans } from "geist/font";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

export const metadata: Metadata = {
  title: "APPA Sport",
  description: "Next generation sport analytics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider
          theme={{
            fontFamily: GeistSans.style.fontFamily,
            fontFamilyMonospace: GeistMono.style.fontFamily,
            headings: { fontFamily: GeistSans.style.fontFamily },
            primaryColor: "violet",
          }}
        >
          <Notifications position="top-right" zIndex={1000} />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
