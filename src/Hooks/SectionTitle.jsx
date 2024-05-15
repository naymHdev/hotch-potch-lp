/* eslint-disable react/prop-types */
const SectionTitle = ({ title, des }) => {
  return (
    <>
      <div className=" w-4/12 mx-auto">
        <h2 className=" text-3xl font-extrabold text-slate-50 text-center">
          {title}
        </h2>
        <p className=" text-sm font-medium text-slate-500 text-center mt-2">
          {des}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
