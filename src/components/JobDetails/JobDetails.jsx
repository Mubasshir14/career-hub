import { useLoaderData, useParams } from "react-router-dom";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)


    const handleApplyJob = () =>{
        saveJobApplication(id);
        toast('You have Applied Successfully')
    }
    return (
        <div>
            <div className="grid md:grid-cols-4 lg:grid-cols-4">
                <div className="md:col-span-3  p-4 m-4">
                    <p className="text-left text-[#757575] mb-10 mt-14"> <span className="font-bold text-black">Job Description: </span>{job.job_description}</p>
                    <p className="text-left text-[#757575] mb-10"> <span className="font-bold text-black">Job Responsibility: </span>{job.job_responsibility}</p>
                    <h2 className="font-bold mb-4">Educational Requirement:</h2>
                    <p className="text-left text-[#757575] mb-10">{job.educational_requirements}</p>
                    <h2 className="font-bold mb-4">Experience:</h2>
                    <p className="text-left text-[#757575] mb-14">{job.experiences}</p>

                </div>
                <div className="md:col-span-1 lg:mt-14">
                    <div className="card w-96 bg-purple-100 p-4 m-4 shadow-xl mb-6">
                        <h2 className="font-bold mb-3">Job Details</h2>
                        <hr />
                        <p className="text-[#757575] mt-6 mb-3"><span className="text-black font-bold">Salary: </span> {job.salary} (Per Month)</p>
                        <p className="text-[#757575] mb-3"><span className="text-black font-bold">Job Title: </span> {job.job_title}</p> <hr />

                        <h2 className="font-bold mt-6 mb-3">Contact Information</h2> <hr /> <br />

                        <p className="mb-3 text-[#757575]"><span className="text-black font-bold">Phone: </span> {job.contact_information.phone}</p>
                        <p className="mb-3 text-[#757575]"><span className="text-black font-bold">Email: </span> {job.contact_information.email}</p>
                        <p className="mb-3 text-[#757575]"><span className="text-black font-bold">Address: </span> {job.contact_information.address}</p>
                        <div className="flex justify-center mt-6">
                        <button 
                        onClick={handleApplyJob}
                        className="btn w-full btn-primary">Apply Now</button>
                    </div>
                    </div>


                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;