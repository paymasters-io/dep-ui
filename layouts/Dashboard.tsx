import SiteFooter from "@/components/SiteModule/SiteFooter";
import SiteHeader from "@/components/SiteModule/SiteHeader";
import SiteLogo from "@/components/SiteModule/SiteLogo";
import SideBar from "@/components/DashboardModule/SideBar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dashboard">
      <SiteHeader fullWidth className="bg">
        <SiteLogo />
        <div className="form-control">
          <div className="input-cont form-input grad-border" data-type="text">
            <MagnifyingGlassIcon className="icon" />
            <input type="text" placeholder="Search paymasters" />
          </div>
        </div>
      </SiteHeader>
      <div className="body">
        <SideBar />
        <div className="wrapper w-full">
          {children}
          <SiteFooter className="!px-0" showLinksOnly />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
