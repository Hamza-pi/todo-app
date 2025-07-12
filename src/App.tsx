import { useState } from "react";
import AddTask from "./components/AddTask";
import NavBar from "./components/NavBar";
import TaskList from "./components/TaskList";
import type { Todo } from "./types";

function App() {
  const [todos, setTodos] = useState<Todo[] | null>(null);
  const [open, setOpen] = useState(false);
  const [editTodo, setEditTodo] = useState<Todo | null>(null);

  return (
    <>
      <NavBar />
      <main>
        <AddTask open={open} setOpen={setOpen} />
        <TaskList />
      </main>
    </>
  );
}

export default App;
