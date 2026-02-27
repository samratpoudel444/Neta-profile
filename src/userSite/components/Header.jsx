import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navData = [
    { name: "Home", link: "/" },
    { name: "Search Candidates", link: "/search-candidates" },
    { name: "2078 Election", link: "/view-election/2078" },
    { name: "2074 Election", link: "/view-election/2074" },
  ];

  return (
    <div className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="w-full h-16 flex justify-between items-center px-6 md:px-16">
        <Link to="/">
          <Logo />
        </Link>

        <div className="hidden md:block text-2xl text-gray-500 tracking-wide">
          Federal Parliament Election
        </div>

        <div className="hidden md:flex items-center">
          {navData.map((data, index) => (
              <Link
                key={index}
                to={data.link}
                className="ml-16 relative inline-block text-black text-md font-medium hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {data.name}
              </Link>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 pb-4 gap-1 border-t border-gray-100">
          <p className="text-xs font-medium text-gray-400 tracking-wide pt-3 pb-1">
            Federal Parliament Election
          </p>

          {navData.map((data, index) => (
            <Link
              key={index}
              to={data.link}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-blue-500 py-2 border-b border-gray-100 last:border-0 transition-colors duration-150"
            >
              {data.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
