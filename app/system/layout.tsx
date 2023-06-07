import { Metadata } from "next";
import React from "react";
import StyledNavbar from "../_components/Layouts/Navbar";
import { AppShell } from "../mantineClientComponents";

export const metadata: Metadata = {
  title: "Systém ReKrabice",
  description: "Interní systém pro trasování ReKrabic.",
};

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell
      navbar={<StyledNavbar />}
      // classNames={{
      //   main: {
      //     display: "flex",
      //     justifyContent: "center",
      //     alignItems: "center",
      //     flexDirection: "column",
      //   },
      // }}
    >
      {children}
    </AppShell>
  );
}