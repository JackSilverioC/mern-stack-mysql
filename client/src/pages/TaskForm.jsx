import { useNavigate, useParams } from "react-router-dom";
import { Form, Formik } from "formik";
import { UseTasks } from "../context/TaskContext";
import { useEffect, useState } from "react";

function TaskForm() {
  const { createTask, getTask, updateTask } = UseTasks();
  const params = useParams();
  const navigate = useNavigate();

  const [tasks, setTasks] = useState({
    title: "",
    description: ""
  });

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const response = await getTask(params.id);
        setTasks({
          title: response.title,
          description: response.description
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div className="container mx-auto mt-2">
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        {params.id ? "Editar Tarea" : "Crear Tarea"}
      </h1>
      <Formik
        initialValues={tasks}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateTask(params.id, values);
            navigate("/");
          } else {
            await createTask(values);
          }

          setTasks({
            title: "",
            description: ""
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className=" bg-slate-600 p-10 rounded-md w-full max-w-lg mx-auto"
          >
            <label htmlFor="title" className="block text-lg font-bold ">
              Título:
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="title"
              placeholder="Escribe un título"
              value={values.title}
              className="bg-slate-50 p-3 w-full rounded-md mt-2 mb-4 text-slate-900"
            />

            <label
              htmlFor="description"
              className="block  text-lg font-bold mt-2"
            >
              Descripción:
            </label>
            <textarea
              onChange={handleChange}
              name="description"
              rows="3"
              placeholder="Escribe una descripción"
              value={values.description}
              className="bg-slate-50 p-3 w-full rounded-md mt-2 mb-4 text-slate-900 "
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-indigo-500 hover:bg-indigo-400  font-bold py-2 px-4 rounded-md w-2/4 mx-auto mt-2 text-white text-center"
              >
                {isSubmitting ? "Guardando..." : "Guardar"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
