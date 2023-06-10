import { Router } from "express";
import {
  deleteTask,
  getTask,
  getTasks,
  postTask,
  putTask
} from "../controllers/tasks.controllers.js";

const router = Router();

router.get("/tasks", getTasks);
router.post("/tasks", postTask);
router.put("/tasks/:id", putTask);
router.get("/tasks/:id", getTask);
router.delete("/tasks/:id", deleteTask);

export default router;
