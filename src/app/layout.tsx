import type { Metadata } from "next";
import { company } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${company.name} | Engineering and Construction`,
  description:
    "Premium engineering and construction website starter for industrial, commercial, FDAS, fit-out, and project management services.",
  keywords: [
    "engineering services",
    "construction company",
    "design and build",
    "project management",
    "FDAS",
    "MEP works"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
