import React, { useEffect, useState } from "react";
import TodoForm from "./todoform";
import TodoList from "./todoslist";

import EditTodo from "./edittodo";
const App = () => {
  const [input, setInput] = useState("");
  const [isedit, setIsEdit] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const todoFromLocal = () => {
    const value = localStorage.getItem("todo");
    if (value) {
      return JSON.parse(value);
    } else {
      return [];
    }
  };
  const [todo, setTodo] = useState(todoFromLocal());
  // console.log('todoFromLocal',todoFromLocal())

  const handleAdd = (e) => {
    e.preventDefault();

    const todoObj = {
      id: todo.length + 1,
      text: input,
      checkBox: ''
    };

    setTodo((preValue) => [...preValue, todoObj]);
    setInput("");
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const handleDelete = (id) => {
    console.log("id", id);
    const updatedTodos = todo.filter((item) => item.id !== id);
    setTodo(updatedTodos);
    localStorage.setItem("todo", JSON.stringify(updatedTodos));
  };

  const handleEdit = (text) => {
    setIsEdit(true);

    setCurrentTodo({ ...text });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setIsEdit(false);
    // console.log("handleUpdate", currentTodo);

    const updatedItem = todo.map((todo) => {
      return todo.id === currentTodo.id ? currentTodo : todo;
    });
    setTodo(updatedItem);
  };

  return (
    <div>
      <div className=" container border bg-white shadow p-5 my-5">
        {isedit ? (
          <EditTodo
            currentTodo={currentTodo}
            setCurrentTodo={setCurrentTodo}
            handleUpdate={handleUpdate}
            setIsEdit={setIsEdit}
          />
        ) : (
          <>
            <TodoForm input={input} setInput={setInput} handleAdd={handleAdd} />

            <TodoList
              todo={todo}
              setTodo={setTodo}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
