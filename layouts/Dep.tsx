import SiteFooter from "@/components/SiteModule/SiteFooter";
import SiteHeader from "@/components/SiteModule/SiteHeader";
import SiteLogo from "@/components/SiteModule/SiteLogo";

const DepLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="def">
      <div className="body-bg"></div>
      <SiteHeader>
        <SiteLogo />
      </SiteHeader>
      <div className="body">{children}</div>
      <SiteFooter showLinksOnly={true} />
    </div>
  );
};

export default DepLayout;
