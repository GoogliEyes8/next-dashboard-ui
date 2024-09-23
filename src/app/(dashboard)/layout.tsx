import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev School Management Dashboard",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">

      {/* LEFT   */}
      {/* <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-200 p-4"> */}
      <div className="w-[220px] bg-red-200 p-4">
        <Link href='/' className="flex justify-center lg:justify-start items-center gap-2">
          <Image src='/logo.png' alt="logo" width={32} height={32}></Image>
          <span className="hidden lg:block">SchoolLama</span>
        </Link>
        <Menu />
      </div>

      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-200"></div>

      {/* {children} */}
    </div>
  );
}
