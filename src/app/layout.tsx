import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio KienLV",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/jpeg;base64,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"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
