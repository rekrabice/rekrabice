import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Metadata } from "next";
import React from "react";
import "./global.css";

export const metadata: Metadata = {
  title: {
    template: "%s | ReKrabice",
    default: "ReKrabice", // a default is required when creating a template
  },
  description:
    "Nestav doma věže z kartonových krabic. Všechny ReKrabice můžeš vrátit a ušetřit tak našim lesům. A to zcela zdarma!",
  robots: "none, noimageindex",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="robots" content="noimageindex" />
        <ColorSchemeScript />
        {/* <link rel="manifest" href="manifest.json" /> */}
      </head>
      <body>
        {/* <GoogleTagsNoScript /> */}
        <MantineProvider theme={{ primaryColor: "green" }}>
          <Notifications />
          {children}
        </MantineProvider>
      </body>
      {/* <GoogleScripts /> */}
    </html>
  );
}
