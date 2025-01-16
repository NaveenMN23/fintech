import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import StoreProvider from "@/store/provider";
import ErrorBoundary from "@/components/common/ErrorBoundary/ErrorBoundary";

const inter = Inter({
  subsets: [
    "latin",
    "latin-ext",
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "vietnamese",
  ], // All subsets
  variable: "--font-inter", // Define a CSS variable for the font
  display: "swap", // Ensures fast font rendering
});

const lato = Lato({
  subsets: ["latin", "latin-ext"], // Include desired subsets
  display: "swap", // Optional: Ensures faster font rendering
  weight: ["100", "300", "400", "700", "900"], // Include desired weights
});

export const metadata: Metadata = {
  title: "Soar Task",
  description: "Task by Soar",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}${lato.className}`}>
      <body className={`bg-appLightWhite`}>
        <ErrorBoundary
          fallback={<div>Something went wrong. Please try again later.</div>}
        >
          <StoreProvider>
            <MainLayout>{children}</MainLayout>
          </StoreProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
