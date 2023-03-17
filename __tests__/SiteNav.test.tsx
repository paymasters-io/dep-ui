import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import SiteNav from "@/components/SiteModule/SiteNav";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("SiteNav", () => {
  it("renders a nav element with 'site-nav' class", () => {
    render(<SiteNav />);

    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveClass("site-nav");
  });

  it("renders a list of links", () => {
    render(<SiteNav />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(2);
    listItems.forEach((listItem) => {
      listItem.querySelectorAll("a").forEach((link) => {
        expect(link).toHaveAttribute("href");
      });
    });
  });
});
