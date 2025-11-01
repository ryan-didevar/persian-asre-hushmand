"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navLinks = [
  { name: "خانه", href: "" },
  { name: "طراحی سایت", href: "design" },
  {
    name: "کمپین های بازاریابی و تبلیغاتی",
    href: "campaigns",
  },
  { name: "اتوماسیون و بازاریابی", href: "automation" },
  { name: "تولید محتوا", href: "content" },
  { name: "مشاور", href: "consultant" },
  { name: "تماس با ما", href: "contact" },
];

const NavRoutes = () => {
  const path = usePathname();
  return (
    <div className="flex items-center space-x-6">
      <div className="hidden sm:flex sm:items-center sm:space-x-4">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={`/${link.href}`}
            className={`
                      px-3 py-2 text-sm font-medium transition duration-150 ease-in-out 
                      ${
                        path === `/${link.href}`
                          ? "font-bold text-sm text-red" // Using red to match the bold text style in the image
                          : "text-[#A0A0A0] hover:text-[#828282]"
                      }
                    `}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavRoutes;
