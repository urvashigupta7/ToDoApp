import React, { useEffect, useState } from "react";
import TodoHeader from "./components/TodoHeader";
import AddTodo from "./components/AddTodo";

import TodoFooter from "./components/TodoFooter";
import TodoList from "./components/TodoList";
import { NormalizedTodos, Filter } from "./types/index";
import { createUid } from "./utils/index";
import { ALL_FILTER } from "./constants";
import { getMockTodos } from "./mocks/index";
import axios from "axios";



const TodoApp = () => {
  const [todos, setTodo] = useState<NormalizedTodos>({});
  const [filter, setFilter] = useState<Filter>({
    id: createUid(),
    text: ALL_FILTER
  });
  useEffect(() => {
    
    async function getdefault():Promise<void>{
      const randomStrings :string []= await (await axios.get("http://localhost:5000/")).data
      console.log(randomStrings)
      const mockTodos= getMockTodos(randomStrings);
      setTodo(mockTodos);
    }
    getdefault()
  }, []);
  return (
    <div className="container">
      <TodoHeader />
      <AddTodo todos={todos} setTodo={setTodo} />
      <TodoList activeFilter={filter.text} setTodo={setTodo} todos={todos} />
      <TodoFooter filter={filter} setFilter={setFilter} />
    </div>
  );
};

export default TodoApp;
