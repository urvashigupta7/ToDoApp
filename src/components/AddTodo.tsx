import React, { useState } from "react";

import { NormalizedTodos } from "../types";
import { createUid } from "../utils/index";
import axios from "axios";
import { config } from "process";


const AddTodo = ({
  todos,
  setTodo
}: {
  todos: NormalizedTodos;
  setTodo: React.Dispatch<React.SetStateAction<NormalizedTodos>>;
}) => {
  const [searchValue, setSearchValue] = useState("");

  const onChange = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLInputElement;
    setSearchValue(target.value);
  };

  const onClick = async() => {
    const newid = createUid();
    const newtodo = {
      id: newid,
      text: searchValue,
      completed: false
    };
    const tobesent={
      todo:newtodo.text
    }
    const config={
      headers:{
        'Content-Type':'application/json'
      }
    }
    await axios.post("/todo",tobesent,config)
    setTodo({ ...todos, [newid]: newtodo });
    setSearchValue("");
  };

  return (
    <div>
      <span>
        <input className="searchBox"
          onChange={onChange}
          name="searchValue"
          value={searchValue}
          type="text"
        />
      </span>
      <span>
        <button className="button" onClick={onClick}> Add + </button>
      </span>
    </div>
  );
};

export default AddTodo;
