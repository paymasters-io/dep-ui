import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export type Option = {
  label: string;
  value: string | null;
  icon?: React.ReactNode;
};

const CustomSelect = ({
  options,
  onSelect,
}: {
  options: Option[];
  onSelect: (option: Option) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="custom-select-container">
      <button
        className="custom-select-trigger cta bg-black/20"
        onClick={handleToggle}
      >
        {selectedOption.icon}
        <span className="text">{selectedOption.label}</span>
        <ChevronDownIcon className="icon sm" />
      </button>
      {isOpen && (
        <ul className="custom-select-options">
          {options.map((option) => (
            <li
              key={option.value}
              className={`custom-select-option cta no-bg  ${
                option.value === selectedOption.value ? "selected" : ""
              }`}
              onClick={() => handleSelect(option)}
              aria-label={option.label}
            >
              {option.icon}
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
