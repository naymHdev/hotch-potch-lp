/* eslint-disable react/prop-types */
const Button = ({ content }) => {
  return (
    <>
      <button className=" text-slate-50 bg-gradient-to-r from-[#3A54FE] via-purple-700 to-[#B02EFF] border-none rounded-md px-4 py-2">
        {content}
      </button>
    </>
  );
};

export default Button;
