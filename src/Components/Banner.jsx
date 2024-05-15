import Button from "../Hooks/Button";
import { FaPlayCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div className="h-[70vh] flex flex-col justify-center items-center text-center">
        <div>
          <h2 className="text-4xl font-extrabold text-slate-50">
            Write better <br /> content for your
          </h2>
          <div className="relative">
            <h2 className="text-4xl mt-1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FA6939] to-[#FDC947]">
              Facebook Ads
            </h2>
            <div className="absolute w-9/12 mx-auto inset-x-0 h-1 bg-gradient-to-r from-[#FA6939] to-[#FDC947]"></div>
          </div>
          <p className="text-sm font-medium text-slate-500 mt-5">
            Artificial intelligence writing tools you create blogs, <br />{" "}
            social media websites and much more.
          </p>
          <div className=" mt-8">
            <Button content="Start 14 Days Free Trial" />
          </div>
          <div className="flex hover:cursor-pointer mt-5 items-center text-slate-50 gap-3 justify-center">
            <FaPlayCircle className="text-xl" />
            <p className="text-xl font-semibold">Watch A Demo</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
