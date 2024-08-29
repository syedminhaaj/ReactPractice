import React from "react";
import { useState } from "react";
import Task from "./Task";
function Dashboard() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const addItemToList = () => {
    //Below is to add array list, but adding ID will not work
    //setTodoList([...todoList, newTask]);
    const newModifiedtask = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      name: newTask,
      completed: false,
    };
    setTodoList([...todoList, newModifiedtask]);
    setNewTask("");
  };

  const completeTask = (id) => {
    console.log("id of completed", id);
    console.log("before update", todoList);

    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: true };
        } else {
          return item;
        }
      })
    );
    console.log("after update", todoList);
  };
  const deleteTask = (id) => {
    const newArr = todoList.filter((item) => {
      return item.id !== id;
    });
    setTodoList(newArr);
  };
  return (
    <div>
      <div></div>
      <input onChange={handleChange} />
      <button onClick={addItemToList}>Add Task</button>
      {todoList.map((item) => (
        <Task
          name={item.name}
          id={item.id}
          completed={item.completed}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      ))}
    </div>
  );
}

export default Dashboard;
