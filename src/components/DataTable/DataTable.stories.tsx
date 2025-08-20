import type { Meta, StoryObj } from "@storybook/react";
import { DataTable, Column } from "./DataTable";

interface User {
  id: number;
  name: string;
  email: string;
}

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
};

export default meta;
type Story = StoryObj<typeof DataTable<User>>;

const columns: Column<User>[] = [
  { key: "id", title: "ID", dataIndex: "id", sortable: true },
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" },
];

const data: User[] = [
  { id: 1, name: "Alice", email: "alice@email.com" },
  { id: 2, name: "Bob", email: "bob@email.com" },
  { id: 3, name: "Charlie", email: "charlie@email.com" },
];

export const Default: Story = {
  args: { data, columns },
};

export const Loading: Story = {
  args: { data: [], columns, loading: true },
};

export const Empty: Story = {
  args: { data: [], columns },
};

export const Selectable: Story = {
  args: {
    data,
    columns,
    selectable: true,
    onRowSelect: (rows) => console.log("Selected:", rows),
  },
};
