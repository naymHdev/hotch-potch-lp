import { customerFeedback } from "../Components/data";
import SectionTitle from "../Hooks/SectionTitle";
import { FaTwitter } from "react-icons/fa";

const CustomerFeedback = () => {
  return (
    <>
      <section className=" mt-20 w-11/12 mx-auto">
        <SectionTitle
          title="What our customer say"
          des="Read why thousands of marketers, writers, and entrepreneurs love us so much"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
          {customerFeedback?.map((feed) => (
            <div key={feed?.id} className=" bg-white rounded-md p-5">
              <div className=" flex justify-between">
                <div className=" flex items-center justify-center gap-3">
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img src={feed?.avatar} />
                    </div>
                  </div>
                  <div>
                    <h3 className=" font-semibold text-slate-900">
                      {feed?.name}
                    </h3>
                    <p className=" text-sm font-medium text-slate-500">
                      {feed?.threads}
                    </p>
                  </div>
                </div>
                <div>
                  <FaTwitter className=" text-2xl text-sky-400" />
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CustomerFeedback;
