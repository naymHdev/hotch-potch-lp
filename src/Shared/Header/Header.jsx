import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import logo from "../../assets/logo.png";
import Button from "../../Hooks/Button";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#12141D] text-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
        aria-label="Global"
      >
        <div className="flex px-8">
          <a href="#" className="">
            <span className="sr-only">Your Company</span>
            <img className=" w-auto h-24" src={logo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden px-8">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="h-6 w-6 text-slate-50" aria-hidden="true" />
          </button>
        </div>
        <Popover className="hidden lg:flex lg:gap-x-5">
          <a href="#" className="text-sm font-medium leading-6 text-slate-50">
            Demos
          </a>
          <a
            href="/about"
            className="text-sm font-semibold leading-6 text-slate-50"
          >
            About
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-slate-50">
            Blog
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-slate-50">
            Pages
          </a>
          <a
            href="/contact"
            className="text-sm font-semibold leading-6 text-slate-50"
          >
            Contact
          </a>
        </Popover>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className=" flex items-center gap-5">
            <button className=" border rounded-md py-2 px-4 text-slate-50">
              Sign in
            </button>
            <Button content="Get Started Free" />
          </div>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#12141D] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={logo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <RxCross2 className="h-6 w-6 text-slate-50" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 grid">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-slate-50"
                >
                  Demos
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-slate-50"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-slate-50"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-slate-50"
                >
                  Pages
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-slate-50"
                >
                  Contact
                </a>
              </div>
              <div className="py-6">
                <div className=" flex items-center gap-5">
                  <button className=" border rounded-md py-2 px-4 text-slate-50">
                    Sign in
                  </button>
                  <Button content="Get Started Free" />
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
