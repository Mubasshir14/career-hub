import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4)


    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    return (
        <div>
            <div className="text-center "> 
                <h2 className='text-5xl font-extrabold mt-32'>Featured Jobs</h2>
                <p className='text-lg  mt-4 mb-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.key} job={job}></Job>)
                }
            </div>
            <div className={`flex justify-center ${dataLength === jobs.length ? 'hidden' : ''}`}>
                <button
                 onClick={() => setDataLength(jobs.length)}
                className="btn btn-primary bg-[#8b82fe] text-white font-bold mb-8 ">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;