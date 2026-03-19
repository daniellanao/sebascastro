"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isInfoPage = pathname === "/info";

  return (
    <>
      {!isInfoPage && (
        <>
          <Sidebar />
          <MobileNav />
        </>
      )}
      <div className={isInfoPage ? "min-h-screen" : "min-h-screen md:pl-56"}>
        {children}
      </div>
    </>
  );
}
