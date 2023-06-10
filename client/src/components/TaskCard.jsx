import { PropTypes } from "prop-types";
import { UseTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";
import { SlCheck, SlClose } from "react-icons/sl";

function TaskCard({ id, title, description, done, createAt }) {
  const { deleteTask, toggleTaskDone } = UseTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(id);
  };

  return (
    <div className="bg-gray-600 text-white p-4 rounded-md">
      <header className="flex justify-between items-center">
        <h2 className="text-xl font-bold capitalize">{title}</h2>
        <span>
          {done === 1 ? (
            <SlCheck className="text-green-500" size={20} />
          ) : (
            <SlClose className="text-red-500" size={20} />
          )}
        </span>
      </header>
      <p className="text-gray-400 text-sm">{description}</p>
      <span className="text-gray-400 text-sm">Creado: {createAt}</span>
      <div className="flex justify-between items-center gap-2 mt-4 font-bold ">
        <button
          className="bg-red-500 grow px-2 py-1 rounded-md hover:bg-red-400"
          onClick={() => deleteTask(id)}
        >
          Eliminar
        </button>
        <button
          className="bg-yellow-500 grow  px-2 py-1 rounded-md hover:bg-yellow-400"
          onClick={() => navigate(`/edit/${id}`)}
        >
          Editar
        </button>
        <button
          className="bg-blue-500 grow px-2 py-1 rounded-md hover:bg-blue-400"
          onClick={() => handleDone(done)}
        >
          Cambiar
        </button>
      </div>
    </div>
  );
}

export default TaskCard;

TaskCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  done: PropTypes.number.isRequired,
  createAt: PropTypes.string.isRequired
};
