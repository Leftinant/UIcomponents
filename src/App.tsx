import InputField from "./components/InputField/InputField";
import { DataTable, Column } from "./components/DataTable/DataTable";

interface User {
  id: number;
  name: string;
  age: number;
}

const data: User[] = [
  { id: 1, name: "Alice", age: 22 },
  { id: 2, name: "Bob", age: 30 },
];

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

export default function App() {
  return (
    <div className='p-4 space-y-6'>
      <InputField
        label='Username'
        placeholder='Type here...'
        helperText='Required'
      />
      <DataTable<User> data={data} columns={columns} selectable />
    </div>
  );
}
