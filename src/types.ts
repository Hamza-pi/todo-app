import type { Dispatch, SetStateAction } from "react";

export interface Todo {
  title: string;
  description?: string;
  date: Date;
  completed: boolean;
}

export interface AddTaskProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  todo?: Todo;
}

export interface TaskListProps {
  todos?: Todo[];
}
