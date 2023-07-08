import React from "react";

const TodoForm = ({ handleAdd, setInput, input }) => {
  return (
    <div>
      <h2 className="text-center mb-5 "> TODO LIST </h2>

      <form className="d-flex ">
        <input
          className="form-control"
          type="text"
          placeholder="type your todos"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />

     
        <button className="btn btn-md btn-success  " onClick={handleAdd}>
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
