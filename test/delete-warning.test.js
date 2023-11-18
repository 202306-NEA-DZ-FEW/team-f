import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DeleteWarning from "@/components/delete-warning/index";
import { deleteDocData } from "@/lib/firebase/firestoreFunctions";

jest.mock("@/lib/firebase/firestoreFunctions", () => ({
  deleteDocData: jest.fn(),
}));

describe("DeleteWarning", () => {
  const mockItem = {
    id: "123",
    // Add other properties as needed for your item
  };

  const mockSetDeleteWarningItem = jest.fn();
  const mockSetItems = jest.fn();
  const mockItems = [
    // Sample items for testing
    { id: "123", name: "Item 1" },
    { id: "456", name: "Item 2" },
    // Add more items as needed
  ];

  it("calls deleteDocData and updates state when 'Delete' button is clicked", async () => {
    render(
      <DeleteWarning
        setDeleteWarningItem={mockSetDeleteWarningItem}
        deleteWarningItem={mockItem.id}
        setItems={mockSetItems}
        items={mockItems}
      />
    );

    const deleteButton = screen.getByText("Delete");
    userEvent.click(deleteButton);

    // Wait for asynchronous operations to complete
    await waitFor(() => {
      expect(deleteDocData).toHaveBeenCalledWith("items", mockItem.id);
      expect(mockSetItems).toHaveBeenCalledWith(
        mockItems.filter((item) => item.id !== mockItem.id)
      );
      expect(mockSetDeleteWarningItem).toHaveBeenCalledWith(false);
    });
  });

  it("cancels deletion when 'Cancel' button is clicked", () => {
    render(
      <DeleteWarning
        setDeleteWarningItem={mockSetDeleteWarningItem}
        deleteWarningItem={mockItem.id}
        setItems={mockSetItems}
        items={mockItems}
      />
    );

    const cancelButton = screen.getByText("Cancel");
    userEvent.click(cancelButton);

    expect(mockSetDeleteWarningItem).toHaveBeenCalledWith(false);
  });
});
