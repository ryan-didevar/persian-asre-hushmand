// components/Navbar.tsx

import NavIcons from "./NavIcons";
import NavLogo from "./NavLogo";
import NavRoutes from "./NavRoutes";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <NavLogo />
          <NavRoutes />
          <NavIcons />
        </div>
      </div>
    </nav>
  );
}
