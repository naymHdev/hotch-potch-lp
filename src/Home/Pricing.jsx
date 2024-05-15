import { pricingDetails } from "../Components/data";
import SectionTitle from "../Hooks/SectionTitle";

const Pricing = () => {
  return (
    <>
      <div className="mt-20">
        <SectionTitle
          title="Make the wise decision for your business"
          des="Choose from an affordable package"
        />
      </div>
      <section className=" w-11/12 md:w-9/12 mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pricingDetails?.map((price) => (
            <div
              className="bg-[#282A37] rounded-xl p-5 flex flex-col justify-between"
              key={price?.id}
            >
              <div>
                <p className="font-medium text-slate-300">{price?.plan}</p>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-50 mt-8">
                    ${price?.price} /{" "}
                    <span className="text-slate-300 text-sm font-thin">
                      month
                    </span>
                  </h3>
                  <p className="text-slate-300 text-sm font-medium mt-3">
                    {price?.description}
                  </p>
                </div>
                <h2 className="text-xl font-extrabold text-slate-100 mt-10">
                  {price?.title}
                </h2>
                <div className="text-sm text-slate-300 font-light space-y-3 mt-5">
                  <p>{price?.point1}</p>
                  <p>{price?.point2}</p>
                  <p>{price?.point3}</p>
                  <p>{price?.point4}</p>
                  <p>{price?.point5}</p>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <button className="text-xl font-semibold text-slate-50 hover:bg-gradient-to-r hover:from-[#3A54FE] hover:via-purple-700 hover:to-[#B02EFF] hover:border-none rounded-xl px-10 py-2 border border-slate-700 shadow-md">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Pricing;
