import SiteFooter from "@/components/SiteModule/SiteFooter";
import SiteHeader from "@/components/SiteModule/SiteHeader";
import SiteLogo from "@/components/SiteModule/SiteLogo";
import SideBar from "@/components/DashboardModule/SideBar";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import DashboardFooter from "@/components/DashboardModule/Footer";
import UsersList from "@/components/DashboardModule/UsersList";
import Image from "next/image";
import zetachainImg from "../assets/icons/zetachain.png";

const DashboardLayout = ({
  children,
  showUsers = false,
}: {
  children: React.ReactNode;
  showUsers?: boolean;
}) => {
  return (
    <div className="dashboard">
      <SiteHeader fullWidth className="bg">
        <SiteLogo />
        <div className="form-control max-w-xl">
          <div className="input-cont form-input grad-border" data-type="text">
            <MagnifyingGlassIcon className="icon" />
            <input type="text" placeholder="Search paymasters" />
          </div>
        </div>
        <div className="wrapper flex items-center gap-4">
          <figure className="shrink-0">
            <Image src={zetachainImg} width={24} height={24} alt="icon" />
          </figure>
          <span className="text font-semibold">Zetachain</span>
        </div>
      </SiteHeader>
      <div className="body">
        <SideBar />
        <div className="wrapper grow w-0">
          {children}
          <DashboardFooter />
        </div>
        {showUsers && <UsersList />}
      </div>
    </div>
  );
};

export default DashboardLayout;
