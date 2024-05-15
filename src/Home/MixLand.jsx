import { GoDotFill } from "react-icons/go";

const MixLand = () => {
  return (
    <>
      <section className=" w-11/12 mx-auto mt-20">
        <div>
          <h2 className=" text-4xl font-extrabold text-center text-slate-50">
            MixLand helps you <br /> build beautiful website
          </h2>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-7 gap-3 mt-10 md:w-9/12 mx-auto">
          <div className=" col-span-full md:col-span-3 p-5 rounded-md text-slate-100 space-y-3">
            <h3 className="text-slate-50 bg-gradient-to-r from-[#3A54FE] via-purple-700 to-[#B02EFF] border-none hover:shadow-sm hover:cursor-pointer p-3 rounded-xl">
              Blog Headlines
            </h3>
            <h3 className="hover:shadow-sm hover:cursor-pointer hover:shadow-slate-400 border border-slate-700 p-3 rounded-xl">
              Blog Intros
            </h3>
            <h3 className="hover:shadow-sm hover:cursor-pointer hover:shadow-slate-400 border border-slate-700 p-3 rounded-xl">
              Content Rewriter
            </h3>
            <h3 className="hover:shadow-sm hover:cursor-pointer hover:shadow-slate-400 border border-slate-700 p-3 rounded-xl">
              Facebook Ads
            </h3>
            <h3 className="hover:shadow-sm hover:cursor-pointer hover:shadow-slate-400 border border-slate-700 p-3 rounded-xl">
              Product Description
            </h3>
            <h3 className="hover:shadow-sm hover:cursor-pointer hover:shadow-slate-400 border border-slate-700 p-3 rounded-xl">
              PAS Copywriting Formula
            </h3>
          </div>
          <div className="bg-[#282A37] p-5 col-span-full md:col-span-4 rounded-md">
            <div>
              <div className=" flex items-center">
                <GoDotFill className=" text-red-500" />
                <GoDotFill className=" text-yellow-400" />
                <GoDotFill className=" text-green-500" />
              </div>
              <p className=" text-slate-400 mt-3">4 Blog Headlines Generated</p>
            </div>
            <div className=" text-slate-200 mt-5 space-y-4">
              <div className=" border-b-[1px] border-slate-500" />
              <p>Create original content that ranks for SEO </p>
              <div className=" border-b-[1px] border-slate-500" />
              <p>Any mechanical keyboard enthusiasts in design?</p>
              <div className=" border-b-[1px] border-slate-500" />
              <p>The more important the work, the more important the rest</p>
              <div className=" border-b-[1px] border-slate-500" />
              <p>How to design a product that can grow itself 10x in year</p>
              <div className=" border-b-[1px] border-slate-500" />
              <p>Any mechanical keyboard enthusiasts in design?</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MixLand;
