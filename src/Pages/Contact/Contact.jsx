import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import { TiGroup } from "react-icons/ti";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdDynamicFeed } from "react-icons/md";
import InfoTab from "./InfoTab";
import Locations from "./Locations";

const Contact = () => {
  return (
    <>
      <section
        className="bg-cover px-5 bg-center h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://i.ibb.co/z6pZmT2/contact-banner.jpg')",
        }}
      >
        <div className="md:flex items-center justify-between md:gap-52">
          <div>
            <h2 className="lg:text-6xl text-4xl font-bold text-slate-50">
              Contact HotchPotch
            </h2>
          </div>
          <div className="mt-8 text-slate-50">
            <div className=" md:flex items-center gap-[70px]">
              <p>Call Sales</p>
              <p className=" text-2xl font-bold">+880 01903141861</p>
            </div>
            <hr className="md:mb-5 mb-2 md:mt-5 mt-2" />
            <div className="md:flex items-center gap-7">
              <p>Contact support</p>
              <p className=" text-2xl font-bold">+880 01770064053</p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#EFEFEF] py-1">
        <div className=" flex items-center px-8 font-medium">
          <Link to="/">Home</Link>
          <GoChevronRight />
          <Link to="/contact">Contact HotchPotch</Link>
        </div>
      </div>
      <section className="mt-8">
        <div className="md:flex grid px-8 items-center gap-5 border-b pb-3">
          <div className="flex hover:cursor-pointer items-center gap-2 text-xl font-medium">
            <TiGroup className=" text-slate-100" />{" "}
            <p className=" text-slate-300">Sales & Support</p>
          </div>
          <div className=" flex hover:cursor-pointer items-center gap-2 text-xl font-medium">
            <HiOutlineOfficeBuilding className=" text-slate-100" />{" "}
            <p className=" text-slate-300">HotchPotch Offices</p>
          </div>
          <div className=" flex hover:cursor-pointer items-center gap-2 text-xl font-medium">
            <MdDynamicFeed className=" text-slate-100" />{" "}
            <p className=" text-slate-300">Feedback</p>
          </div>
        </div>
        <h2 className="md:text-5xl text-3xl font-bold text-slate-100 px-8 mt-10 mb-6">
          Contact Sales or Support
        </h2>
        <div className="md:px-8 px-1">
          <InfoTab />
        </div>
      </section>
      <div>
        <Locations />
      </div>
    </>
  );
};

export default Contact;
