import express from "express";
import type { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Task Queue API 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});