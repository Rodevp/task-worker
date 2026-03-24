import type { Job } from "./types";

function worker(jobs: Job[]) {

    let activeJobs = 0;
    const MAX_CONCURRENT_JOBS = 2;

    setInterval(() => {

        console.log("Checking for new jobs...");

        if (activeJobs >= MAX_CONCURRENT_JOBS) return;
        if (jobs.length === 0) return;

        const job = jobs.shift();

        if (!job) return;

        activeJobs++;

        setTimeout(() => {
            console.log(`Job ${job.id} in progress...`);
            activeJobs--;
        }, 2000);

    }, 1000);
}

export {
    worker
}