import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import { useState } from "react";
import AddTask from "./Components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  // tasks is an array
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping hello",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id: id, ...task };

    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const onAdd = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <div className="container">
      <Header onAdd={onAdd} />
      {showAddTask && <AddTask onAdd={addTask} />}

      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
