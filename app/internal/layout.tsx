import React from "react";
import Wrapper from "./_components/Wrapper";

// export const metadata: Metadata = {
//   title: "Interní aplikace",
//   description: "Interní aplikace pro výpomoc týmu za ReKrabicemi.",
//   robots: "none, noimageindex",
// };

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Wrapper>{children}</Wrapper>;
}
