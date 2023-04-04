import type { NextPage } from "next";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import TopNav from "./Nav";

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="relative bg-paymasters-dark w-full  py-4   min-h-[2250px] overflow-hidden  text-left text-xs text-gray-600 font-mono">
        <TopNav />
        <Sidebar />
        {children}
        <Footer />
    </div> 
  )
}

export default Layout