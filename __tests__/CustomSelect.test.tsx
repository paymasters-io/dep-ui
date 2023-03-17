import { render, screen, fireEvent } from "@testing-library/react";
import CustomSelect, { Option } from "@/components/CustomSelect";

const options: Option[] = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
];

describe("CustomSelect component", () => {
  it("should render with default option and show options list when trigger is clicked", () => {
    render(<CustomSelect options={options} onSelect={() => {}} />);

    const defaultOptionLabel = options[0].label;
    const optionsList = screen.queryByRole("list", { hidden: true });
    expect(screen.getByText(defaultOptionLabel)).toBeInTheDocument();
    expect(optionsList).not.toBeInTheDocument();

    const trigger = screen.getByRole("button");
    fireEvent.click(trigger);

    options.forEach((option) => {
      const optionLabel = screen.getByRole("listitem", { name: option.label });
      expect(optionLabel).toBeInTheDocument();
    });

    // console.log(screen.debug());
    // console.log(screen.queryByRole("list", { hidden: true }));

    expect(screen.queryByRole("list", { hidden: true })).toBeInTheDocument();
  });

  it("should call onSelect with selected option when an option is clicked", () => {
    const onSelect = jest.fn();
    render(<CustomSelect options={options} onSelect={onSelect} />);

    const trigger = screen.getByRole("button");
    fireEvent.click(trigger);

    const optionToSelect = options[1];
    const optionLabel = screen.getByText(optionToSelect.label);
    fireEvent.click(optionLabel);

    expect(onSelect).toHaveBeenCalledWith(optionToSelect);
  });
});
