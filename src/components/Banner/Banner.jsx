

const Banner = () => {
    return (
        <div>
            {/* <h2 className='text-5xl text-center'>Home Page Banner</h2> */}
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img  src="https://i.ibb.co/nPp4VHH/d0f42b5cf5cd.jpg" className=" rounded-lg bg-transparent " />
                    <div>
                    <h1 className="text-4xl font-bold text-center lg:text-left lg:text-7xl  lg:font-extrabold">One Step <br /> Closer To Your <br /> <span className='text-[#8b82fe]'>Dream Job</span></h1>
                        <p className="py-6 text-gray-500 text-center lg:text-left">Explore thousands of job opportunities with all the  information you need. Its your future. Come find it. Manage all  your job application from start to finish.</p>
                        <button className="btn btn-primary bg-[#8b82fe] font-bold">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;