import { React, useState } from "react";
const Data = () => {
  const [todos, settodos] = useState("");
  const [tododata, settododata] = useState([]);

  const handleData = (e) => {
    settodos(e.target.value);
  };

  const handleadd = () => {
    if (todos) {
      settododata([...tododata, todos]);
      settodos("");
    }
  };
  const handleDelete = (index) => {
    const updatesDetails = tododata.filter((_, i) => i !== index);
    settododata(updatesDetails);
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
          <button className="buttonstyle" onClick={handleadd}>
            Add
          </button>
        </div>
        <div className="centredatabox">
          <ui>
            {tododata.map((todos, index) => (
              <li key={index}>
                {todos}
                <button onClick={() => handleDelete(index)}>X</button>
              </li>
            ))}
          </ui>
        </div>
      </div>
    </div>
  );
};

export default Data;
