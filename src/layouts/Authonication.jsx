import { Outlet } from "react-router-dom";
import LoginImg from "../assets/image shaep.svg";

function Authonication() {
  return (
    <div className="lg:bg-pink lg:p-10 flex   min-h-screen">
      <div className="hidden flex-1 lg:flex justify-center items-center">
        <img className="max-w-full" src={LoginImg} alt="Login Illustration" />
      </div>
      <div className=" flex-1 mx-2 sm:mx-5  ">
        <div className="bg-white sm:w-96 md:max-w-[450px] -translate-y-1/2 relative top-1/2 p-4 md:p-8 rounded-lg shadow-lg m-auto ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Authonication;
