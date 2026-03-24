import express from "express";
import { worker } from "./controller";

import type { Request, Response } from "express";
import type { Job } from "./types.ts";

const app = express();
app.use(express.json());

const JOBS: Job[] = [];

app.get("/", (req: Request, res: Response) => {
  res.send("Task Queue API 🚀");
});

app.post("/jobs", (req: Request, res: Response) => {

    const {id, type, state, data} = req.body;

    if (!id || !type || !state || !data) return res.status(400).json({ error: "Missing required fields" });

    const newJob: Job = {
        id,
        type,
        state,
        data
    }

    JOBS.push(newJob);

    res.status(201).json({
        message: "Job created successfully"
    })

});

worker(JOBS);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});