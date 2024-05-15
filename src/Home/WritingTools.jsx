import { toolsList } from "../Components/data";
import { GiStabbedNote } from "react-icons/gi";

const WritingTools = () => {
  return (
    <>
      <section className=" mt-20 w-11/12 mx-auto">
        <div>
          <h2 className=" text-3xl font-extrabold text-slate-50 text-center">
            54 exciting writing tools
          </h2>
          <p className=" text-sm font-medium text-slate-500 text-center mt-2">
            Ai engines take information from various sources and read <br />
            them like a human would do.
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
          {toolsList?.map((blog) => (
            <div
              key={blog?.id}
              className="bg-[#282A37] rounded-md p-5 flex gap-1 shadow-md hover:shadow-2xl hover:cursor-pointer hover:shadow-slate-400"
            >
              <div>
                <GiStabbedNote className="text-[#F9EAB0] text-4xl" />
              </div>
              <div>
                <h2 className=" text-2xl font-semibold text-slate-50">
                  {blog?.title}
                </h2>
                <p className=" text-sm text-slate-400 font-medium mt-2">
                  {blog?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex items-center justify-center mt-16">
          <button className=" text-xl font-semibold text-slate-50">See ll 54 available tools</button>
        </div>
      </section>
    </>
  );
};

export default WritingTools;
