import React from "react";
import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";

const UtilityIcons = ({ icon }) => <div className="sidebar-icon">{icon}</div>;

function Navbar() {
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 mx-auto ml-8">
                <a href="#" className="text-gray-300">
                  Perusahaan {">"}
                </a>

                <a href="#" className="text-gray-800 font-bold">
                  Mitramas Infosys Global
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div>
              <UtilityIcons
                icon={
                  <AiOutlineBell size={20} color="#292524" className="mr-4" />
                }
              />
            </div>
            <div>
              <UtilityIcons
                icon={
                  <AiOutlineSearch
                    size={20}
                    color="#292524"
                    className="mr-10"
                  />
                }
              />
            </div>
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  ></img>
                  
                </button>
              </div>
            </div>
                <a href="#" className=" mx-4 text-gray-800 text-sm font-bold">
                  John Doe
                </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
