type JobState = "pending" | "in_progress" | "completed" | "failed";

type Job = {
    id: string,
    type: string,
    state: JobState,
    data:any
}

export type {
    Job
}