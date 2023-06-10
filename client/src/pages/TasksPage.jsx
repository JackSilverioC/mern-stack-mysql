import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { UseTasks } from "../context/TaskContext";

function TasksPage() {
  const { tasks, loadTasks } = UseTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1>No hay tareas aún</h1>;

    return tasks.map(({ id, title, description, done, createAt }) => {
      return (
        <TaskCard
          key={id}
          id={id}
          title={title}
          description={description}
          done={done}
          createAt={createAt}
        />
      );
    });
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-4">Tareas</h1>
      <div className="grid grid-cols-3 gap-2">{renderMain()}</div>
    </div>
  );
}

export default TasksPage;
