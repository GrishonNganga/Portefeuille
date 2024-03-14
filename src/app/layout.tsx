import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

import "./globals.css";


export const metadata: Metadata = {
  title: "Grishon Ng'ang'a",
  description: "Grishon's HQ",
  icons: "/man.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
