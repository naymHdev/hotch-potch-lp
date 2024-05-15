import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const ContactFrom = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    country: "",
    businessPhone: "",
    company: "",
    areaOfInterest: "",
    emailOrPhone: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <>
      <div className="md:mt-16 mt-10 text-slate-100">
        <h2 className=" text-4xl font-bold">
          Products and Solutions Inquiries
        </h2>
        <p className=" font-medium mt-4 text-slate-400">
          Have a question about purchasing a product or solution that you are
          interested in? We’re here to help.
        </p>
      </div>
      <section>
        <div className=" mt-10">
          <form>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-6">
                <div className=" w-full">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="input-field bg-slate-500 text-slate-200 p-2 w-full border-b py-1 hover:border-[#33B08D] focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="input-field bg-slate-500 text-slate-200 p-2 w-full border-b py-1 hover:border-[#33B08D] focus:outline-none"
                  />
                </div>
                <input
                  type="email"
                  name="businessEmail"
                  value={formData.businessEmail}
                  onChange={handleChange}
                  placeholder="Business Email"
                  className="input-field bg-slate-500 text-slate-200 p-2 w-full border-b py-1 hover:border-[#33B08D] focus:outline-none"
                />
                <div>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Country"
                    className="input-field bg-slate-500 text-slate-200 p-2 w-full border-b py-1 hover:border-[#33B08D] focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="businessPhone"
                    value={formData.businessPhone}
                    onChange={handleChange}
                    placeholder="Business Phone"
                    className="input-field bg-slate-500 text-slate-200 p-2 w-full border-b py-1 hover:border-[#33B08D] focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company"
                    className="input-field bg-slate-500 text-slate-200 p-2 w-full border-b py-1 hover:border-[#33B08D] focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="areaOfInterest"
                    value={formData.areaOfInterest}
                    onChange={handleChange}
                    placeholder="Area of Interest"
                    className="input-field bg-slate-500 text-slate-200 p-2 w-full border-b py-1 hover:border-[#33B08D] focus:outline-none"
                  />
                </div>
                <div>
                  <textarea
                    className=" focus:outline-none w-full bg-slate-500 text-slate-200 p-2 "
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="What products, services or solutions would you like to discuss with a sales expert?"
                  ></textarea>
                </div>
              </div>
              <div>
                <p className=" font-medium text-sm py-4 text-slate-400">
                  May HPE provide you with personalized communications about HPE
                  and select HPE-partner products, services, offers and events?
                </p>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="emailOrPhone"
                    checked={formData.emailOrPhone}
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <span className=" text-slate-400">
                    Contact via Email or Phone
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#3A54FE] via-purple-700 to-[#B02EFF] border-none md:w-6/12 flex items-center justify-center gap-2 text-white font-bold py-2 px-4 rounded-md"
              >
                Continue <FaArrowRight />
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactFrom;
