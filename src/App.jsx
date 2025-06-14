import { useEffect, useState } from "react";
import "./App.css";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import imagem from "./img/wallpaper.jpg"; // Caminho relativo correto

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCOMPLETE: !task.isCOMPLETE };
      }
      return task;
    });

    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTask = tasks.filter((task) => task.id !== taskId);
    setTasks(newTask);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCOMPLETE: false,
    };
    setTasks([...tasks, newTask]);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="w-screen h-screen relative flex justify-center items-start pt-10 overflow-auto">
    <img
  src={imagem}
  alt="Wallpaper"
  className="absolute top-0 left-0 w-full h-full object-cover -z-10"
/>

      <div className="w-[600px] bg-white rounded-xl p-6 shadow-lg">
        <h1 className="text-3xl text-slate-900 font-bold text-center mb-8">
          Gerenciador de Tarefas
        </h1>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
