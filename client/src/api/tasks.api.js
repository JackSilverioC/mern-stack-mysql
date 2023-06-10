import axios from "axios";
import { API_URL } from "../../../server/config";

export const getTasksRequest = async () => await axios.get(`${API_URL}/tasks`);

export const createTaskRequest = async (task) =>
  await axios.post(`${API_URL}/tasks`, task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`${API_URL}/${id}`);

export const getTaskRequest = async (id) =>
  await axios.get(`${API_URL}/tasks/${id}`);

export const updateTaskRequest = async (id, values) =>
  await axios.put(`${API_URL}/tasks/${id}`, values);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`${API_URL}/tasks/${id}`, {
    done
  });
