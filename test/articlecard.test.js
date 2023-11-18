import { render, screen } from "@testing-library/react";
import ArticleCard from "@/components/articlecard/ArticleCard";

describe("ArticleCard", () => {
  const mockArticle = {
    title: "Test Article",
    description: "This is a test article description.",
    imageUrl: "/test-image.jpg",
    articleUrl: "/test-article",
  };

  it("renders with content on the left by default", () => {
    render(<ArticleCard {...mockArticle} />);
    const titleElement = screen.getByText("Test Article");
    const descriptionElement = screen.getByText("This is a test article description.");
    const imageElement = screen.getByAltText("Test Article");
    const buttonElement = screen.getByText("Read more");

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders with content on the right when textOnleft is true", () => {
    render(<ArticleCard {...mockArticle} textOnleft />);
    const titleElement = screen.getByText("Test Article");
    const descriptionElement = screen.getByText("This is a test article description.");
    const imageElement = screen.getByAltText("Test Article");
    const buttonElement = screen.getByText("Read more");

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("does not render a Read more button when articleUrl is not provided", () => {
    render(<ArticleCard title="Test Article" description="This is a test article description." imageUrl="/test-image.jpg" />);
    const buttonElement = screen.queryByText("Read more");
  });
});
