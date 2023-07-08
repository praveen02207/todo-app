import React from "react";

const TodoList = ({ todo, setTodo, handleEdit, handleDelete }) => {
  const handleCheck = (index) => {
    const updatedTodo = [...todo];
    updatedTodo[index].checkBox = !updatedTodo[index].checkBox;
    setTodo(updatedTodo);
    localStorage.setItem("todo", JSON.stringify(updatedTodo));
  };

  return (
    <div>
      {todo.map((item, index) => (
        <div
          key={index}
          className="border bg-white shadow my-3  row  align-items-center "
        >
          <div className=" col-lg-1 col-12">
            <input
              type="checkbox"
              className="form-check-input border-dark "
              checked={item.checkBox}
              onChange={() => handleCheck(index)}
            />
          </div>

          <div className="col-lg-9 col-12 ">
            <p
              className={
                item.checkBox
                  ? "pt-3  text-decoration-line-through text-break"
                  : "pt-3 text-break "
              }
            >
              {item.text}
            </p>
          </div>

          <div className="col-lg-2 col-12  ">
            <button
              onClick={() => handleEdit(item)}
              className="btn btn-sm btn-primary mx-2 "
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(item.id)}
              className="btn btn-sm btn-danger "
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
