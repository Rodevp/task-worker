import type { Job } from "./types";

function worker(jobs: Job[]) {
    setInterval(() => {

        console.log("Checking for new jobs...");

        if (jobs.length === 0) return;

        const job = jobs.shift();

        if (!job) return;

        setTimeout(() => {
            console.log(`Job ${job.id} in progress...`);
        }, 2000);

    }, 1000);
}

export {
    worker
}