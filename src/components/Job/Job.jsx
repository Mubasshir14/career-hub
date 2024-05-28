import { GrLocation } from "react-icons/gr";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, id} = job;
    return (
        // <div>
        //     <img src={logo} alt="" />
        //     <h2>{job_title}</h2>
        //     <p>{company_name}</p>
        //     <p>{remote_or_onsite}</p>
        //     <p>location</p>
        //     <p>job_type</p>
        //     <p>{salary}</p>
        // </div>
        <div className="card card-compact  bg-base-100 shadow-xl p-8 mb-8 space-y-6 border-2">
            <figure ><img  src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-[#474747]">{job_title}</h2>
                <h2 className="card-title text-[#757575]">{company_name}</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="card-actions gap-4">
                    <button className="btn btn-primary bg-transparent text-[#8b82fe]">{remote_or_onsite}</button>
                    <button className="btn btn-primary bg-transparent text-[#8b82fe]">{job_type}</button>
                </div>
                <div className="card-actions items-center">
                        <p className="flex items-center gap-1 text-lg text-[#757575]"> <GrLocation></GrLocation> {location}</p>
                        <p className="flex items-center gap-2 text-lg text-[#757575]"> <AiOutlineDollarCircle></AiOutlineDollarCircle> Salary: {salary}</p>
                </div>
                <div className="card-actions  justify-start">
                    <Link to={`job/${id}`}>
                    <button className="btn font- text-white btn-primary bg-[#8b82fe]">Viwe Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;