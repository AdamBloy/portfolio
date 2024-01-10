import { Inter } from "next/font/google";
import "./globals.css";

import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio for Adam Bloy",
  description: "Creative portfolio for Adam Bloy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
