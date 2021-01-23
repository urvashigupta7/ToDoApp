import React, { useEffect, useState } from "react";
import { NormalizedTodos, ToDo } from "../types";
import { getTodosBasedOnFilter, getTodos } from "../utils/index";
import { AiFillClockCircle } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { IoMdDoneAll } from "react-icons/io";

const TodoList = ({
  activeFilter,
  setTodo,
  todos
}: {
  activeFilter: string;
  setTodo: React.Dispatch<React.SetStateAction<NormalizedTodos>>;
  todos: NormalizedTodos;
}) => {
  const [filteredTodos, setFilteredTodos] = useState<ToDo[]>([]);

  useEffect(() => {
    const gettodos = getTodos(todos);
    const filteredTodos = getTodosBasedOnFilter(gettodos, activeFilter);
    setFilteredTodos(filteredTodos);
  }, [todos, activeFilter]);

  const onClick = (currid: string) => {
    setTodo({
      ...todos,
      [currid]: { id: currid, text: todos[currid].text, completed: true }
    });
  };

  return (
    <div style={{ marginTop: "2%" }}>
      {filteredTodos.map((t) => (
        <div className="grid" key={t.id}>
          <span>{t.completed ? <IoMdDoneAll /> : <AiFillClockCircle />}</span>
          <span style={{ textAlign: "left" }}>{t.text}</span>
          {!t.completed ? (
            <span style={{ cursor: "pointer" }}>
              <TiTick onClick={() => onClick(t.id)} />
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
