import { Disclosure } from "@headlessui/react";
import { IoChevronUpSharp } from "react-icons/io5";

export default function Faq() {
  return (
    <div className="w-full pt-9">
      <div className="mx-auto w-full rounded-2xl bg-slate-400 p-5">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex w-full ${
                  open && "bg-slate-400"
                } justify-between hover:bg-slate-400 px-4 py-2 text-left text-sm font-medium border-t border-b   focus:outline-none focus-visible:ring `}
              >
                <span>What does WWW do today?</span>
                <IoChevronUpSharp
                  className={`${open ? "rotate-180 transform" : ""} h-5 w-5 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4  pb-2 pt-4 text-sm text-slate-100 bg-slate-400">
                WWW integrates technology and expertise, providing
                infrastructure, software (including market-leading Red Hat) and
                consulting services for clients as they pursue the digital
                transformation of the world’s mission-critical businesses.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open && "bg-slate-400"
                } flex w-full border-b justify-between hover:bg-slate-400 px-4 py-2 text-left text-sm font-medium   focus:outline-none focus-visible:ring `}
              >
                <span>Does WWW have goals for sustainability?</span>
                <IoChevronUpSharp
                  className={`${open ? "rotate-180 transform" : ""} h-5 w-5 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-slate-100 bg-slate-400">
                In 2021, we furthered our tradition of leadership in
                sustainability, announcing a goal of net-zero greenhouse gas
                emissions by 2030 across all the countries in which we operate.
                Our data-driven sustainability solutions are helping clients
                turn ambition into action.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open && "bg-slate-400"
                } flex w-full border-b justify-between hover:bg-slate-400 px-4 py-2 text-left text-sm font-medium   focus:outline-none focus-visible:ring `}
              >
                <span>What is the future for WWW?</span>
                <IoChevronUpSharp
                  className={`${open ? "rotate-180 transform" : ""} h-5 w-5 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-slate-100 bg-slate-400">
                WWW is always on the hunt for what’s next. Learn more about the
                group of more than 3,000 scientists and researchers around the
                globe who deeply believe in the power of the scientific method
                to invent at WWW Research. For example, we are leading the
                charge in quantum computing.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open && "bg-slate-400"
                } flex w-full border-b justify-between hover:bg-slate-400 px-4 py-2 text-left text-sm font-medium   focus:outline-none focus-visible:ring `}
              >
                <span>What is WWW’s view of the future of work?</span>
                <IoChevronUpSharp
                  className={`${open ? "rotate-180 transform" : ""} h-5 w-5 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-slate-100 bg-slate-400">
                One area of interest for WWW is in personal digital employees,
                or digeys, AI-powered workers who can relieve employees of their
                most repetitive, mundane tasks. Learn more about watsonx
                Orchestrate. We believe intelligent automation solutions will
                help businesses improve workflows, integrate systems and gain
                insights into operations. Learn more at WWW Automation.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
