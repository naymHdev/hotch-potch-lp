import { pricingDetails } from "../Components/data";
import SectionTitle from "../Hooks/SectionTitle";

const Pricing = () => {
  return (
    <>
      <div className=" mt-20">
        <SectionTitle
          title="Make the wise decision for your business"
          des="Choose from a affordable any packages"
        />
      </div>
      <section className=" w-9/12 mx-auto mt-10">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pricingDetails?.map((price) => (
            <div className="bg-[#282A37] rounded-xl p-5" key={price?.id}>
              <p>{price?.plan}</p>
              <div>
                <h3>{price?.price}</h3>
                <p>{price?.description}</p>
              </div>
              <h2>{price?.title}</h2>
              <div>
                <p>{price?.point1}</p>
                <p>{price?.point2}</p>
                <p>{price?.point3}</p>
                <p>{price?.point4}</p>
                <p>{price?.point5}</p>
              </div>
              <div className=" flex items-center justify-center">
                <button className=" text-xl font-semibold text-slate-50 hover:bg-gradient-to-r hover:from-[#3A54FE] hover:via-purple-700 hover:to-[#B02EFF] hover:border-none rounded-xl px-10 py-2 border border-slate-700 shadow-md">
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
