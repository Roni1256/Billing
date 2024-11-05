import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaFileInvoiceDollar, FaBoxes, FaUserCircle } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { GoPeople, GoRepoTemplate } from "react-icons/go";
import { CgOrganisation } from "react-icons/cg";
import { TbListDetails } from "react-icons/tb";
const Sidepanel = ({ openpanel, toggle }) => {
  const links = [
    {
      name: "Dashboard",
      icon: <MdSpaceDashboard size={20} className="mr-3" />,
      link: "/dashboard",
    },
    {
      name: "Billing",
      icon: <FaFileInvoiceDollar size={20} className="mr-3" />,
      link: "/dashboard/billing",
    },
    {
      name: "Stocks Mangement",
      icon: <FaBoxes size={20} className="mr-3" />,
      link: "/dashboard/stocks",
    },
    {
      name: "Customers Management",
      icon: <GoPeople size={20} className="mr-3" />,
      link: "/dashboard/customer-management",
    },
    {
      name: "Templates",
      icon: <GoRepoTemplate size={20} className="mr-3" />,
      link: "/dashboard/templates",
    },
    {
      name: "Company Details",
      icon: <CgOrganisation size={20} className="mr-3" />,
      link: "/dashboard/details",
    },
  ];

  return (
    <div className="relative">
      <div
        className={`z-10 bg-transparent md:bg-white dark:bg-black/40 backdrop-blur-md h-screen w-full sm:w-[250px] md:w-[300px] md:relative fixed left-0 dark:text-white p-3 sm:p-4 pt-5 sm:pt-7 border-r-2 border-gray-700/20 transition-all duration-300 ${
          openpanel ? "left-0" : "left-[-100%]"
        }`}
      >
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-bold">Navigations</h1>
          <hr className="mt-2 sm:mt-3" />
        </div>

        <nav>
          <ul className="space-y-3 sm:space-y-4">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.link}
                  className={`flex items-center p-2 sm:p-3 text-sm sm:text-base hover:bg-gray-700 focus:bg-gray-700 hover:text-white rounded-lg transition-colors active:bg-gray-700 ${
                    link.link === window.location.pathname
                      ? "bg-gray-700 text-white"
                      : "dark:text-gray-200"
                  }`}
                  onClick={() => window.innerWidth <= 789 && toggle()}
                >
                  {link.icon}
                  <span className="line-clamp-1">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidepanel;
