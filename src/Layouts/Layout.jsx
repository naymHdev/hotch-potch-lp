import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const Layout = () => {
  return (
    <div className="bg-[#1B1C21]">
      <Header />
      <div className=" min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
