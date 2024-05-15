const Ads = () => {
  return (
    <>
      <section className="w-10/12 mx-auto mt-20 md:flex items-center justify-between p-5 rounded-md bg-gradient-to-r from-[#3A54FE] via-purple-700 to-[#B02EFF] border-none">
        <div className=" flex-1">
          <h2 className=" text-slate-100 md:text-2xl font-semibold">
            It will help you improve your writing & bring ideas more clearly.
          </h2>
        </div>
        <div className=" flex-1 flex justify-center md:justify-end md:mt-0 mt-5">
          <button className=" bg-white text-slate-900 rounded-md px-5 py-3">
            Start 14 Days Free Trial
          </button>
        </div>
      </section>
    </>
  );
};

export default Ads;
