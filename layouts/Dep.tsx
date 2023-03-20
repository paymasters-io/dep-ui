import SiteFooter from "@/components/SiteModule/SiteFooter";
import SiteHeader from "@/components/SiteModule/SiteHeader";
import SiteLogo from "@/components/SiteModule/SiteLogo";
import Link from "next/link";

const DepLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="def">
      <div className="body-bg"></div>
      <SiteHeader>
        <SiteLogo />
        <Link href={"/"}>
          <button className="cta no-bg">
            Back
          </button>
        </Link>
      </SiteHeader>
      <div className="body">{children}</div>
      <SiteFooter showLinksOnly={true} />
    </div>
  );
};

export default DepLayout;
