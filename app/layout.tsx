import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./_styles/globals.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Portfolio Jessica Borda",
  description: "TODO",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
