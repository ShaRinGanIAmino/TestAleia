import { IoIosSearch } from "react-icons/io";
import { TbCurrentLocation } from "react-icons/tb";

const Nav = () => {
  return (
    <div className=" flex  justify-center items-center p-[50px] w-screen">
      <div className=" flex gap-1 justify-center items-center rounded-2xl bg-gray-300 bg-opacity-40 py-[3px] px-2 w-[250px] mt-10 sm:mt-0">
        <IoIosSearch color="grey" />
        <input type="text" className="bg-transparent outline-none" />
        <TbCurrentLocation color="grey" />
      </div>
    </div>
  );
};

export default Nav;
