import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import SiteHeader from "@/components/SiteModule/SiteHeader";
import SiteLogo from "@/components/SiteModule/SiteLogo";
import SiteNav from "@/components/SiteModule/SiteNav";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("SiteHeader", () => {
  it("renders a header element with '.site-logo' and nav.site-nav element", () => {
    render(
      <SiteHeader>
        <SiteLogo />
        <SiteNav />
      </SiteHeader>
    );

    const siteHeader = screen.getByRole("banner");

    expect(siteHeader).toBeInTheDocument();
    expect(siteHeader).toHaveClass("site-header");

    // expect to conatin an image
    expect(siteHeader).toContainElement(screen.getByRole("img"));

    expect(siteHeader).toContainElement(screen.getByRole("navigation"));
  });
});
