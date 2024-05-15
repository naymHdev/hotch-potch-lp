import {
  GiThreePointedShuriken,
  GiStoneSphere,
  GiStaticWaves,
} from "react-icons/gi";
import { FaCubesStacked, FaFireFlameCurved } from "react-icons/fa6";
import { TbTriangleInverted } from "react-icons/tb";
import { PiWebhooksLogoThin } from "react-icons/pi";

const Company = () => {
  return (
    <>
      <div className=" mt-16 w-11/12 md:w-9/12 mx-auto">
        <p className=" text-slate-50 text-center">
          Trusted by nearly 5000+ paying customers
        </p>
      </div>
      <section className="md:w-7/12 w-11/12 mx-auto mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className=" flex items-center gap-2">
          <GiStaticWaves className=" text-2xl text-slate-400" />
          <h2 className=" text-xl font-extrabold text-slate-500">waverio</h2>
        </div>
        <div className=" flex items-center gap-2">
          <GiStoneSphere className=" text-2xl text-slate-400" />
          <h2 className=" text-xl font-medium text-slate-500">
            SquareStone
          </h2>
        </div>
        <div className=" flex items-center gap-2">
          <GiThreePointedShuriken className=" text-2xl text-slate-400" />
          <h2 className=" text-xl font-extrabold text-slate-500">martino</h2>
        </div>
        <div className=" flex items-center gap-2">
          <FaCubesStacked className=" text-2xl text-slate-400" />
          <h2 className=" text-xl font-extrabold text-slate-500">Virogan</h2>
        </div>
        <div className=" flex items-center gap-2">
          <TbTriangleInverted className=" text-2xl text-slate-400" />
          <h2 className=" text-xl font-thin text-slate-500">VERTEX</h2>
        </div>
        <div className=" flex items-center gap-2">
          <PiWebhooksLogoThin className=" text-2xl text-slate-400" />
          <h2 className=" text-xl font-extrabold text-slate-500">aromix</h2>
        </div>
        <div className=" flex items-center gap-2">
          <FaFireFlameCurved className=" text-2xl text-slate-400" />
          <h2 className=" text-xl font-sans text-slate-500">fireli</h2>
        </div>
        <div className=" flex items-center gap-2">
          <h2 className=" text-xl font-serif text-slate-500">Matroma</h2>
        </div>
      </section>
    </>
  );
};

export default Company;
