# React UI Components (DataTable + InputField)

A small reusable React + TypeScript component library featuring a **DataTable** (with sorting, selection, and type-safe columns) and an **InputField** (with labels and helper text).

This project demonstrates how to build generic, strongly typed, and accessible UI components using **React, TypeScript, and Tailwind CSS**.

---

## 🚀 Features

### DataTable
- Type-safe columns (dataIndex is always checked against row type)
- Sorting (ascending / descending)
- Optional row selection with checkboxes
- Automatic type inference from `data` (no need to pass `<User>` everywhere)
- Accessible (checkboxes have labels, no data state handled gracefully)

### InputField
- Labeled input with helper text
- Easy to style with Tailwind
- Reusable for forms

---

## ⚙️ Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/Leftinant/UIcomponents
cd UIcomponents
```
2. **Install dependencies (using pnpm)**
```bash
pnpm install
```
3. **Run the development server**
```bash
pnpm dev
```
This starts the Vite dev server at http://localhost:5173

4. **Run tests (with Vitest + Testing Library)**
```bash
pnpm test
```

## ✨ Description of Approach

The approach was to design reusable, type-safe UI components:

#### Generic DataTable

- Implemented with a generic <T extends object> so that the table automatically infers its type from the data prop.
- The columns definition is constrained so that dataIndex must be a valid key of T. This prevents runtime errors and enforces compile-time safety.
- Sorting is handled with React useState for sort key and order.
- Selection is optional and triggers callbacks with strongly typed rows.

#### InputField

- Simple wrapper for <input> with label and helper text.
- Styled with Tailwind for responsiveness and consistency.

#### Testing & Stories

- Unit tests validate rendering, sorting, and selection logic.
- Storybook (or Vite preview stories) demonstrates usage with mock data.

This modular design makes it easy to extend the library with more components (buttons, modals, forms) while keeping type safety and reusability in mind.