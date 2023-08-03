import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-[#69c0fe] ">
      <div className="flex justify-between items-center py-6  max-w-[1440px] mx-auto px-5">
        <div className="flex items-center gap-[9px]">
          <Link to={"/"}>
            <h2 className="uppercase text-[20px] font-bold text-[#a114ff] mr-[30px]">
              Online Chat
            </h2>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to={"/login"} className="font-semibold text-[#ff2bd5]">
            Login
          </Link>
          <Link to={"/Register"} className="font-semibold text-[#882eff]">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
