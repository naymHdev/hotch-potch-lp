import { Tab } from "@headlessui/react";
import { FaArrowRight } from "react-icons/fa6";
import ContactFrom from "./ContactFrom";
import SupportTab from "./SupportTab";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function InfoTab() {
  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className=" flex items-center gap-5 border rounded-md border-yellow-300">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-yellow-300 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-purple-500 shadow-md"
                  : "text-[#a7ecd8] hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Contact Sales
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-yellow-300 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-purple-500 shadow-md"
                  : "text-[#b7dad0] hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Contact Support
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-8 p-2 md:p-5 w-full border rounded-md shadow-md">
          <Tab.Panel>
            <div className="md:flex justify-between">
              <section>
                <div>
                  <h2 className=" text-3xl font-bold text-slate-300">
                    Contact Sales
                  </h2>
                  <div className=" mt-8">
                    <h4 className=" text-xl font-bold text-slate-300">
                      Products and Solutions
                    </h4>
                    <p className="mt-1 font-medium underline underline-offset-8 text-slate-300">
                      +880 01770064053
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <div className=" flex items-center gap-2 hover:gap-4 hover:cursor-pointer font-bold text-purple-500">
                    <p>Email us</p> <FaArrowRight className=" text-xl" />
                  </div>
                  <div className=" flex items-center gap-2 hover:gap-4 hover:cursor-pointer font-bold text-purple-500">
                    <p>Chat with us</p> <FaArrowRight className=" text-xl" />
                  </div>
                  <div className=" flex items-center gap-2 hover:gap-4 hover:cursor-pointer font-bold text-purple-500">
                    <p>Get a quote</p> <FaArrowRight className=" text-xl" />
                  </div>
                  <div className=" flex items-center gap-2 hover:gap-4 hover:cursor-pointer font-bold text-purple-500">
                    <p>Find an HPE Partner near you</p>{" "}
                    <FaArrowRight className=" text-xl" />
                  </div>
                </div>
              </section>
              <div className="md:w-7/12 mx-auto">
                <ContactFrom />
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <SupportTab />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
