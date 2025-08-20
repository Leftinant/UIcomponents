import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DataTable, Column } from "./DataTable";

interface User {
  id: number;
  name: string;
}

const columns: Column<User>[] = [
  { key: "id", title: "ID", dataIndex: "id", sortable: true },
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
];

const data: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

describe("DataTable", () => {
  it("renders table headers", () => {
    render(<DataTable data={data} columns={columns} />);
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
  });

  it("renders table rows", () => {
    render(<DataTable data={data} columns={columns} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });

  it("shows empty state when no data", () => {
    render(<DataTable data={[]} columns={columns} />);
    expect(screen.getByText("No data available")).toBeInTheDocument();
  });

  it("calls onRowSelect when row clicked", () => {
    const handleSelect = vi.fn();
    render(
      <DataTable
        data={data}
        columns={columns}
        selectable
        onRowSelect={handleSelect}
      />
    );
    fireEvent.click(screen.getByLabelText("Select row 1"));
    expect(handleSelect).toHaveBeenCalled();
  });
});
