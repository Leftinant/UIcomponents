import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InputField } from "./InputField";

describe("InputField", () => {
  it("renders with label and placeholder", () => {
    render(<InputField label='Username' placeholder='Enter username' />);
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
  });

  it("shows error message when invalid", () => {
    render(<InputField label='Email' invalid errorMessage='Invalid email' />);
    expect(screen.getByText("Invalid email")).toBeInTheDocument();
  });

  it("calls onChange when typing", () => {
    const handleChange = vi.fn();
    render(<InputField label='Name' onChange={handleChange} />);
    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "John" },
    });
    expect(handleChange).toHaveBeenCalled();
  });

  it("can be disabled", () => {
    render(<InputField label='Disabled' disabled />);
    expect(screen.getByLabelText("Disabled")).toBeDisabled();
  });
});
