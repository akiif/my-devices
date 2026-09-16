import type { Metadata } from "next";
import "./globals.css";
import { basePath } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "My Devices",
  description: "A website listing all of the tech devices that I have owned.",
  authors: [{ name: "Akif Mohammed" }],
  icons: {
    icon: `${basePath}/images/favicon.png`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
