import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

test("can add a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add new todo");
  const form = screen.getByTestId("form");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.submit(form);

  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("can toggle todo completion", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("can delete a todo", () => {
  render(<TodoList />);
  const deleteButtons = screen.getAllByTestId("delete-btn");
  fireEvent.click(deleteButtons[0]);
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
