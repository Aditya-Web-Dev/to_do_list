import React, { useState } from "react";
import "./Input.css";

const Input = () => {
  let todo = [
    "Welcome 👋",
    "Have a good day!!",
    "once app closed/refreshed your added task is deleted!!",
    "Click on text to remove the task"
  ];

  const [todoList, setToDoList] = useState(todo);

  const [value, setValue] = useState("");

  const InputValue = (event) => {
    setValue(event.target.value);
  };

  const completed = (e) => {
    const chosenText = e.target.innerHTML;
    let index = todo.indexOf(chosenText);
    if (index > -1) {
      // only splice array when item is found
      todo.splice(index, 1); // 2nd parameter means remove one item only
    }

    e.target.style.display = "none";
  };

  const Text = (props) => {
    return (
      <div className="listTask" onClick={completed}>
        {/* <input type="checkbox" name="" id="" /> */}
        <li>{props.list}</li>
      </div>
    );
  };

  const DataInput = () => {
    todoList.push(value);
    setToDoList(todoList);
    setValue("");
  };

  return (
    <div>
      <div className="listDisplay">
        <ul>
          {todoList.map((todo) => {
            return <Text list={todo} />;
          })}
        </ul>
      </div>
      <div className="toDoInput">
        <input
          type="text"
          placeholder="Add a new to do"
          value={value}
          onChange={InputValue}
        />
        <button type="submit" onClick={DataInput}>
          +
        </button>
      </div>
    </div>
  );
};

export default Input;
