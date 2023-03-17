import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import EmailForm from "@/components/EmailForm";

describe("EmailForm component", () => {
  it("renders the email input and submit button", () => {
    render(<EmailForm reason="subscribe" updateSubmit={() => {}} />);
    const emailInput = screen.getByTestId("email");
    const submitButton = screen.getByText("Subscribe");
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("submits the form only when an email has been entered", () => {
    const mockUpdateSubmit = jest.fn();
    render(<EmailForm reason="subscribe" updateSubmit={mockUpdateSubmit} />);
    const emailInput = screen.getByTestId("email");
    const submitButton = screen.getByText("Subscribe");

    // Submit form with empty email
    fireEvent.click(submitButton);
    expect(mockUpdateSubmit).not.toHaveBeenCalled();

    // Submit form with valid email
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(submitButton);
    expect(mockUpdateSubmit).toHaveBeenCalledWith({
      email: "test@example.com",
    });
  });
});
