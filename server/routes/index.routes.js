import { Router } from "express";
import pool from "../db.js";

const router = Router();

router.get("/ping", async (req, res) => {
  // const [firstRow] = await pool.query("SELECT 1+1 as result");
  // const { result } = firstRow[0];
  // console.log(result);
  res.json("pong");
});

export default router;
