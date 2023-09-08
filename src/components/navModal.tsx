import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const NavModal = ({ loggetIn, user, logoutHandel, isOpen, setisOpen }) => {
  const Navigate = useNavigate();
  function LogOut() {
    logoutHandel()
    setisOpen(false)
  }
  return (
    <>
      {isOpen && (
        <div className="fixed bg-white w-full h-full top-0 left-0 z-50">
          <div className="absolute top-3 flex justify-between  left-3 z-50 w-full">
            <div className="flex flex-col gap-4">
              {loggetIn ? (
                <>
                  <div className="flex items-center gap-2">
                    <img
                      src={user.image}
                      alt=""
                      className="w-[40px] rounded-[50%]"
                    />
                    <p className="font-semibold text-[#ff2bd5]">
                      {user.username}
                    </p>
                  </div>
                  <button
                    className="px-2 py-1.5 bg-[#6e8dff] hover:bg-[#4d73ff] text-[#e2e2e2] rounded-[10px] "
                    onClick={() => setisOpen(false)}
                  >
                    <Link
                      to={"/creatArticle"}
                      className="font-semibold text-[#61ff7b]"
                    >
                      Creat article
                    </Link>
                  </button>
                  <button
                    className="px-2 py-1.5 text-[#e2e2e2] rounded-[10px] bg-red-400 hover:bg-red-600"
                    onClick={LogOut}
                  >
                    logout
                  </button>
                </>
              ) : (
                <>
                  <Link to={"/login"} className="font-semibold text-[#ff2bd5]">
                    Login
                  </Link>
                  <Link
                    to={"/Register"}
                    className="font-semibold text-[#882eff]"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
            <button
              className="absolute right-6"
              onClick={() => setisOpen(!isOpen)}
            >
              <i className="fa-solid fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavModal;
