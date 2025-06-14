import { useState } from "react"
function AddTasks({ onAddTaskSubmit }){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
      <div className="space-y-4 bg-slate-200 rounded-md shadow p-10 my-5">
        <input className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" type="text" placeholder="Diigte o título da tarefa" value={title} onChange={(event) => setTitle(event.target.value)} /> <br />
        <input className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" type="text" placeholder="Digite a descrição da tarefa" value={description} onChange={(event) => setDescription(event.target.value)} /> <br />
        <button onClick={() => {
            // verificar se esta vazio
            if (!title.trim() || !description.trim()) {
               return alert("Os campos estão vazios")
            }
            onAddTaskSubmit(title,description)
            setTitle("")
            setDescription("")
        }} className="cursor-pointer bg-slate-400 p-2 rounded-md text-white hover:bg-slate-500">Adicionar</button>
      </div>
    )
}

export default AddTasks