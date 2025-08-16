import React, { useState, useEffect } from "react";

const Data = () => {
  const [todos, setTodos] = useState("");
  const [tododata, setTododata] = useState([]);

  // Load todos from localStorage on first render
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTododata(storedTodos);
    }
  }, []);

  // Save todos to localStorage whenever tododata changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tododata));
  }, [tododata]);

  const handleData = (e) => {
    setTodos(e.target.value);
  };

  const handleAdd = () => {
    if (todos.trim()) {
      setTododata([...tododata, todos.trim()]);
      setTodos("");
    }
  };

  const handleDelete = (index) => {
    const updatedDetails = tododata.filter((_, i) => i !== index);
    setTododata(updatedDetails);
  };

  return (
    <div className="Datapage">
      <h1 className="Heading">Todo list</h1>
      <div className="Centre-box">
        <div className="centreinputbox">
          <input
            className="data-area"
            placeholder="Enter the data"
            value={todos}
            onChange={handleData}
          />
          <button className="buttonstyle" onClick={handleAdd}>
            Add
          </button>
        </div>
        <div className="centredatabox">
          <ul>
            {tododata.map((todo, index) => (
              <li key={index}>
                {todo}
                <button className="remove-btn" onClick={() => handleDelete(index)}>X</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Data;
