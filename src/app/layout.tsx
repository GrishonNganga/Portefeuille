import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

import "./globals.css";
import ReactQueryWrapper from "./components/react-query-wrapper";


export const metadata: Metadata = {
  title: "Grishon Ng'ang'a - Full Stack Engineer",
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
      <body className={inter.className}>
        <ReactQueryWrapper>
          {children}
        </ReactQueryWrapper>
        <Analytics />
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  );
}
