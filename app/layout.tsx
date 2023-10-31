import type { Metadata } from "next";
import "./globals.css";
import { GeistMono, GeistSans } from "geist/font";

import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript, Button } from "@mantine/core";

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
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
