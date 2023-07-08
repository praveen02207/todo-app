import React from "react";

const EditTodo = ({ currentTodo, setCurrentTodo, handleUpdate, setIsEdit }) => {
  console.log("currentTodo", currentTodo);

  return (
    <div>
      <h2 className="text-center mb-5 "> EDIT TODO LIST </h2>

      <form className="d-flex ">
        <input
          className="form-control  "
          type="text"
          placeholder="type your todos"
          onChange={(e) =>
            setCurrentTodo({ ...currentTodo, text: e.target.value })
          }
          // it copies currenttodo change text value in that object
          value={currentTodo.text}
        />
        <button
          onClick={(e) => handleUpdate(e)}
          className="btn btn-md btn-success "
        >
          update
        </button>
        <button
          onClick={() => setIsEdit(false)}
          className="btn btn-md btn-dark mx-2"
        >
          back
        </button>
      </form>
    </div>
  );
};

export default EditTodo;
