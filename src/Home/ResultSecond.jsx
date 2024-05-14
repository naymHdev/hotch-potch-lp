import Button from "../Hooks/Button";

const ResultSecond = () => {
  return (
    <>
      <section className=" mt-20 grid md:flex gap-5 md:gap-40 w-11/12 mx-auto">
        <div className=" flex-1 mt-20">
          <h2 className=" text-3xl font-bold text-slate-50">
            write what you want to convey through clear, & authentic writing.
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
        <div className="bg-[#FFFFFF] flex-1 rounded-md p-5 grid grid-cols-1 md:grid-cols-5 gap-2">
          <div className=" col-span-full md:col-span-2">
            <div className=" grid space-y-2 font-thin text-slate-600 text-sm">
              <p>Blog Outline</p>
              <p>Blog Intro</p>
              <p>Blog Conclusion</p>
              <p>AIDA</p>
              <p>PAS</p>
              <p>Content Rewriter</p>
              <div className=" grid space-y-2">
                <div className=" mt-2 border border-b-4 border-[#E1E3E8] rounded-full w-7/12" />
                <div className=" mt-2 border border-b-4 border-[#E1E3E8] rounded-full w-4/12" />
                <div className=" mt-2 border border-b-4 border-[#E1E3E8] rounded-full w-6/12" />
                <div className=" mt-2 border border-b-4 border-[#E1E3E8] rounded-full w-7/12" />
                <div className=" mt-2 border border-b-4 border-[#E1E3E8] rounded-full w-3/12" />
                <div className=" mt-2 border border-b-4 border-[#E1E3E8] rounded-full w-7/12" />
                <div className=" mt-2 border border-b-4 border-[#E1E3E8] rounded-full w-5/12" />
                <div className=" mt-2 border border-b-4 border-[#E1E3E8] rounded-full w-2/12" />
                <div className=" mt-2 border border-b-4 border-[#E1E3E8] rounded-full w-4/12" />
              </div>
            </div>
          </div>
          <div className=" col-span-full md:col-span-3"></div>
        </div>
      </section>
    </>
  );
};

export default ResultSecond;
