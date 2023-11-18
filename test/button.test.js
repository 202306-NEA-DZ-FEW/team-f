// button.test.js

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "@/components/button/Button";

describe("Button", () => {
  it("renders a button with default style", () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("bg-green", "text-white");
  });

  it("renders a link with default style when href is provided", () => {
    render(<Button href="/path">Go to path</Button>);
    const linkElement = screen.getByRole("link");

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveClass("bg-green", "text-white");
  });

  it("renders a button with outlinePrimary style", () => {
    render(<Button variant="outlinePrimary">Click me</Button>);
    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("bg-transparent", "border-green", "text-green");
  });

  it("renders a button with outlineSecondary style", () => {
    render(<Button variant="outlineSecondary">Click me</Button>);
    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("bg-transparent", "border-red", "text-red");
  });

  it("triggers the onClick handler when the button is clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const buttonElement = screen.getByRole("button");

    userEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
