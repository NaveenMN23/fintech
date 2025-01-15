import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Soar Task",
  description: "Task by Soar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body
        className={`bg-appLightWhite`}
      >
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
