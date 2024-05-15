import { FaArrowRight } from "react-icons/fa6";

const Impact = () => {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-14">
        <div className="bg-slate-400 text-slate-100 hover:bg-[#d2cece] hover:cursor-pointer py-4 px-4">
          <h3 className=" text-2xl font-light">WWW Trust Center</h3>
          <p className=" font-light mt-20">
            Learn how WWW protects our clients and business with security and
            privacy practices
          </p>
          <div className=" mt-36">
            <FaArrowRight className=" text-3xl text-[#AB2CFA]" />
          </div>
        </div>
        <div className=" bg-slate-400 text-slate-100 hover:bg-[#d2cece] hover:cursor-pointer py-4 px-4">
          <h3 className=" text-2xl font-light">Enterprise social good</h3>
          <p className=" font-light mt-20">
            This includes initiatives like ethical sourcing, sustainable
            practices.
          </p>
          <div className=" mt-[170px]">
            <FaArrowRight className=" text-3xl text-[#AB2CFA]" />
          </div>
        </div>
        <div className="bg-slate-400 text-slate-100 hover:bg-[#d2cece] hover:cursor-pointer py-4 px-4">
          <h3 className=" text-2xl font-light">
            WWW Sustainability Accelerator
          </h3>
          <p className=" font-light mt-12">
            The WWW Sustainability Accelerator aims to foster sustainability
            solutions within the World Wide Web ecosystem.
          </p>
          <div className=" mt-36">
            <FaArrowRight className=" text-3xl text-[#AB2CFA]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Impact;
