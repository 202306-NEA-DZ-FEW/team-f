import { render, screen } from "@testing-library/react";
import BlogCard from "@/components/blogcard/BlogCard";

describe("BlogCard", () => {
  const mockBlog = {
    title: "Test Blog",
    description: "This is a test blog description.",
    date: "2023-10-26",
    image: "/test-image.jpg",
  };

  it("renders blog card with correct content", () => {
    render(<BlogCard blog={mockBlog} />);

    const titleElement = screen.getByText("Test Blog");
    const descriptionElement = screen.getByText("This is a test blog description.");
    const dateElement = screen.getByText("2023-10-26");
    const imageElement = screen.getByAltText("Test Blog");

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });

  it("renders blog card with correct styles", () => {
    render(<BlogCard blog={mockBlog} />);

    const cardElement = screen.getByTestId("blog-card"); // Use a data-testid
    const dateBadgeElement = screen.getByText("2023-10-26");

    expect(cardElement).toHaveClass("bg-white");
    expect(cardElement).toHaveClass("shadow-md");
    expect(cardElement).toHaveClass("rounded-xl");
    expect(cardElement).toHaveClass("ml-2");
    expect(cardElement).toHaveClass("mr-2");
    expect(cardElement).toHaveClass("mb-2");
    expect(cardElement).toHaveClass("mt-2");
    expect(cardElement).toHaveClass("px-2");
    expect(cardElement).toHaveClass("py-2");
    expect(cardElement).toHaveClass("verflow-hidden");

    expect(dateBadgeElement).toHaveClass("text-sm");
    expect(dateBadgeElement).toHaveClass("bg-green");
    expect(dateBadgeElement).toHaveClass("ml-0");
    expect(dateBadgeElement).toHaveClass("px-3");
    expect(dateBadgeElement).toHaveClass("py-2");
  });
});
