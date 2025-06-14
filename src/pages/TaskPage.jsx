import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";

function TaskPage() {
  const navigate = useNavigate();
  const [SearchParams] = useSearchParams();
  const title = SearchParams.get("title");
  const description = SearchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-screen h-screen bg-slate-500 flex justify-center">
        <div className="w-[600px]">
          <div className="flex justify-center relative">
            <button onClick={() => navigate(-1)} className="text-white cursor-pointer absolute left-0 bottom-0 top-0">
              <ChevronLeft></ChevronLeft>
            </button>
            <h1 className="text-3xl text-slate-100 font-bold text-center my-10">
              Detalhes da Tarefa
            </h1>
          </div>
          <div className="bg-slate-400 p-4 rounded-md">
            <h2 className="text-xl text-slate-600 font-bold">{title}</h2>

            <p className="text-slate-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
