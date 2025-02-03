import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MNA DEFI",
  description: "MNA DEFI landing page",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
