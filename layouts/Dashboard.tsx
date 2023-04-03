import SiteFooter from "@/components/SiteModule/SiteFooter";
import SiteHeader from "@/components/SiteModule/SiteHeader";
import SiteLogo from "@/components/SiteModule/SiteLogo";
import SideBar from "@/components/DashboardModule/SideBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dashboard">
      <SiteHeader fullWidth>
        <SiteLogo />
      </SiteHeader>
      <div className="body">
        <SideBar />
        {children}
      </div>
      <SiteFooter showLinksOnly />
    </div>
  );
};

export default DashboardLayout;
