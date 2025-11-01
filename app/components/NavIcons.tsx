import { LuCircleUser } from "react-icons/lu";
import { RiSearch2Line } from "react-icons/ri";

const NavIcons = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* Search Icon */}
      <button
        className="p-2 w-12 h-12 text-3xl rounded-lg text-gray-700 border border-[#ECECEC] justify-center items-center flex"
        aria-label="Search"
      >
        <RiSearch2Line />
      </button>

      {/* Profile Icon */}
      <button
        className="p-2 w-12 h-12 text-3xl rounded-lg text-gray-700 border border-[#ECECEC] justify-center items-center flex"
        aria-label="Profile"
      >
        <LuCircleUser />
      </button>
    </div>
  );
};

export default NavIcons;
