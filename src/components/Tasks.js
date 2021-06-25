import React from "react";
import Task from "./Task";
// const tasks = [
//   {
//     id: 1,
//     text: "Food shopping",
//     day: "Feb 5th at 2:30Pm",
//     reminder: false,
//   },
//   {
//     id: 2,
//     text: "Ecom shopping",
//     day: "Feb 6th at 2:30Pm",
//     reminder: true,
//   },
//   {
//     id: 3,
//     text: "Dig shopping",
//     day: "Feb 7th at 2:30Pm",
//     reminder: true,
//   },
// ];

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task task={task} key={task.id} onDelete={onDelete} onToggle={ onToggle}/>
      ))}
    </>
  );
};

export default Tasks;
