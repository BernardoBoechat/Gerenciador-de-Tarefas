import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router";

function Tasks(props) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams()
    query.set("description", task.description)
    query.set("title", task.title)
    navigate(`/detalhes?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 bg-slate-200 rounded-md shadow p-10">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-slate-400 text-white p-2 rounded-md w-full text-left cursor-pointer ${task.isCOMPLETE && "line-through"} hover:bg-slate-500`}
          >
            {task.title}
          </button>
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 p-2 rounded-md text-white cursor-pointer hover:bg-slate-500"
          >
            <ChevronRightIcon />
          </button>
          <button
            className="bg-slate-400 rounded-md p-2 hover:bg-red-400 cursor-pointer"
            onClick={() => props.onDeleteTaskClick(task.id)}
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
