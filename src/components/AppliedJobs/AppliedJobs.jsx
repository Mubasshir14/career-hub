import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";


const AppliedJobs = () => {

    const [appliedJobs, setAppliedJobs] = useState([]);
    const jobs = useLoaderData();
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            const jobApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id == id);
                if (job) {
                    jobApplied.push(job)
                }
            }
            setAppliedJobs(jobApplied);
        }
    }, [])
    return (
        <div>
            {/* <h2 className="text-3xl">Jobs I applied: {appliedJobs.length}</h2> */}
            {
                appliedJobs.map(job =>
                    <li className="list-none" key={job.id}>
                        {/* <img src={job.logo} alt="" />
                        <span>{job.job_title}</span>
                        <span>{job.company_name}</span> */}
                        <div className="flex justify-start bg-base-200 p-5 lg:mb-40 md:mt-16">
                            <div className="hero-content min-h-min flex-col lg:flex-row">
                                <img src={job.logo} className="max-w-sm rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-5xl font-bold">{job.job_title}</h1>
                                    <p className="py-6">{job.company_name}</p>
                                    <div className="">
                                        <button className="btn btn-primary">{job.remote_or_onsite}</button>
                                        <button className="btn btn-primary ml-4">{job.job_type}</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </li>)
            }


        </div>
    );
};

export default AppliedJobs;