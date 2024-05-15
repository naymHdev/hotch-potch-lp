/* eslint-disable react/no-unescaped-entities */
import Button from "../Hooks/Button";
import { GoDotFill } from "react-icons/go";

const Results = () => {
  return (
    <>
      <section className=" mt-32 grid md:flex gap-5 md:gap-40 w-11/12 mx-auto">
        <div className=" rounded-md shadow-md bg-white border-none p-5 relative">
          <div>
            <h4 className=" text-xl font-bold">Results</h4>
            <p className=" text-sm font-medium text-slate-500">
              Here's what our AI came up with
            </p>
            <div className="bg-[#F5F7FF] text-slate-600 rounded-md p-5 space-y-5 mt-6">
              <p>
                Pain: You are an e-commerce business, and you want to sell your
                product all over the country, but you are confused about how to
                handle sales tax.
              </p>
              <p>
                Agitate: You have no idea how much sales tax to charge your
                customers in each state
              </p>
              <p>
                Solution: Use TaxSol, our full state <br /> solution, to manage
                your sales to
              </p>
            </div>
            <div className="bg-[#F5F7FF] text-slate-600 rounded-md p-5 space-y-5 mt-5">
              <p>
                Pain: e-commerce business owners are struggling to keep up with
                the ever changing sales tax laws.
              </p>
              <p>Agitate: Sales tax is a complicated, confusing</p>
            </div>
            <div className=" hidden md:flex">
              <div className="rounded-md bg-[#FFFFFF] p-5 shadow-md w-8/12 absolute top-[240px]  ml-[230px]">
                <div className=" flex items-center">
                  <GoDotFill className=" text-red-500" />
                  <GoDotFill className=" text-yellow-400" />
                  <GoDotFill className=" text-green-500" />
                </div>
                <div className=" mt-5 border border-b-4 border-[#2B59FF] rounded-full w-2/12" />
                <div className=" mt-6 border border-b-4 border-[#E1E3E8] rounded-full w-11/12" />
                <div className=" mt-3 border border-b-4 border-[#E1E3E8] rounded-full w-10/12" />
                <div className=" mt-3 border border-b-4 border-[#E1E3E8] rounded-full w-9/12" />
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-20">
          <h2 className=" text-3xl font-bold text-slate-50">
            Create content efficiently and quickly with great AI writing tools
          </h2>
          <p className=" text-sm font-thin text-slate-200 mt-8">
            150K+ users, No Credit Card Required. Pro designs and writing at no
            cost. Start for free. AI Writer Tool | Generate text for ecom,
            social media, website, sales, blogs etc.
          </p>
          <div className=" mt-8">
            <Button content="Start 14 Days Free Trial" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Results;
