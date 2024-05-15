import { FaArrowRight } from "react-icons/fa6";

const SupportTab = () => {
  return (
    <>
      <section className=" md:flex md:gap-40">
        <div>
          <div>
            <h2 className=" text-3xl font-bold text-slate-100">
              Contact Support
            </h2>
            <h3 className=" text-2xl font-bold mt-5 text-slate-100">
              Contract Support
            </h3>
            <p className=" font-semibold underline text-slate-400">
              +880 01770064053
            </p>
            <h2 className=" text-2xl font-bold mt-10 text-slate-100">
              Warranty and Out-of-Warranty Support
            </h2>
            <p className=" font-semibold text-slate-400">support.wizards.com</p>
          </div>
          <div className="mt-10 hover:cursor-pointer flex items-center gap-2 hover:gap-4 text-xl font-semibold text-slate-500">
            <h3>Login to chat with Support</h3> <FaArrowRight />
          </div>
          <div className="mt-3 hover:cursor-pointer flex items-center gap-2 hover:gap-4 text-xl font-semibold text-slate-500">
            <h3>Find an HPE Partner near you</h3> <FaArrowRight />
          </div>
        </div>
        <div className=" mt-20">
          <h2 className=" text-2xl font-bold mt-10 text-slate-100">
            Support Links
          </h2>
          <div className=" mt-12">
            <div className="mt-3 hover:cursor-pointer flex items-center gap-2 hover:gap-4 text-xl font-semibold text-slate-500">
              <h3>Sign in to chat with Support</h3> <FaArrowRight />
            </div>
            <div className="mt-3 hover:cursor-pointer flex items-center gap-2 hover:gap-4 text-xl font-semibold text-slate-500">
              <h3>Access HPE Support Center</h3> <FaArrowRight />
            </div>
            <div className="mt-3 hover:cursor-pointer flex items-center gap-2 hover:gap-4 text-xl font-semibold text-slate-500">
              <h3>View the directory of worldwide</h3>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportTab;
