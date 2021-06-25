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
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
