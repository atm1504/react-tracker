import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Food shopping",
      day: "Feb 5th at 2:30Pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Ecom shopping",
      day: "Feb 6th at 2:30Pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Dig shopping",
      day: "Feb 7th at 2:30Pm",
      reminder: true,
    },
  ]);
  const deleteTask = (id) => {
    console.log("Deleted ", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    console.log("Toggle reminder", id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <h2>No tasks to show</h2>
      )}
    </div>
  );
}

export default App;
