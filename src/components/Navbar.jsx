import { Link } from "react-router-dom";
import Search from "./Search";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { setIsAuth } = useContext(AuthContext);
  const userData = JSON.parse(localStorage.getItem("user-info"));
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("token");
  };
  return (
    <div className=" w-full bg-[#1C232B] h-[72px] flex items-center justify-between px-[24px] text-white ">
      <div className="flex items-center gap-[24px] ">
        <img className="w-[24px]  h-[24px] " src="/burger.svg" alt="" />
        <Link to={"/"}>
          <img className=" w-[148px] h-[40px] " src="/logo.svg" alt="" />
        </Link>
      </div>
      <Search />
      <div className="flex items-center gap-[24px]">
        <img src="/pluse.svg" alt="" />
        <img src="/kolokolchik.svg" alt="" />
        <h2>{userData.fullName}</h2>
        <button
          onClick={logout}
          className="  w-[155px] h-[42px] bg-[#00A1E7] rounded-[6px] text-[12px]  "
        >
          Выход
        </button>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
