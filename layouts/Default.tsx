import HeaderActions from "@/components/AppModule/HeaderActions";
import SiteFooter from "@/components/SiteModule/SiteFooter";
import SiteHeader from "@/components/SiteModule/SiteHeader";
import SiteLogo from "@/components/SiteModule/SiteLogo";
import SiteNav from "@/components/SiteModule/SiteNav";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="default">
      <div className="def-bg"></div>
      <SiteHeader>
        <SiteLogo />
        <HeaderActions />
      </SiteHeader>
      <div className="body">{children}</div>
      <SiteFooter />
    </div>
  );
};

export default DefaultLayout;
