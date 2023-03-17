import SiteFooter from "@/components/SiteModule/SiteFooter";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("SiteFooter", () => {
  it("renders a footer element with 'site-footer' class", () => {
    render(<SiteFooter />);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass("site-footer");
  });

  it("renders a list of links", () => {
    render(<SiteFooter />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(6);
    listItems.forEach((listItem) => {
      listItem.querySelectorAll("a").forEach((link) => {
        expect(link).toHaveAttribute("href");
      });
    });
  });
});
