import { FaArrowRight } from "react-icons/fa6";

const Locations = () => {
  return (
    <>
      <section className="mt-16 px-8">
        <div className="md:w-6/12">
          <h1 className=" text-5xl font-semibold text-slate-50">
            HotchPotch offices and executive briefing centers
          </h1>
          <p className=" text-sm text-slate-400 mt-4">
            Use our list of locations to find your way to one of our office
            headquarter locations or Executive Briefing Centers. To find an
            official HPE Partner near you, use our{" "}
            <span className=" underline hover:cursor-pointer">
              Find a Partner locator
            </span>
            .
          </p>
        </div>
        <div className="mt-5 hover:cursor-pointer flex items-center gap-2 hover:gap-4 text-xl font-semibold text-yellow-500">
          <h3>View our worldwide office locations</h3> <FaArrowRight />
        </div>
        <div className=" md:w-6/12 flex justify-between mt-16 text-slate-400">
          <div className=" font-medium space-y-1">
            <p>Mohammadpur, GB - Winnersh Triangle</p>
            <p>210 Tajmahal Road</p>
            <p>Bonani, RG41 5TP, Bangladesh</p>
          </div>
          <div className=" font-medium space-y-1">
            <p>Gulshan, GB - Yard Triangle</p>
            <p>200 Dhanmondi 11/4A</p>
            <p>Mohakhali, RG41 5TP, Bangladesh</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Locations;
