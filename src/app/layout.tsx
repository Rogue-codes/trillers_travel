import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trillers Travel",
  description: "Travel Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="flex items-center justify-center bg-desktop" style={{backgroundImage: `url("../assets/background.jpg")`}} >
        <Sidebar />
        <Navbar />
      <body className={inter.className}>{children}</body>
      </div>
    </html>
  );
}
