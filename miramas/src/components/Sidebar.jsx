import React from "react";
import { BiHomeAlt, BiBox } from "react-icons/bi";
import { BsClipboardCheck, BsPeopleFill, BsBoundingBox } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";
import { FaSearchDollar } from "react-icons/fa";
import { SiHackthebox } from "react-icons/si";
import { HiAcademicCap, HiOutlineTicket } from "react-icons/hi";
import { RiBuilding2Line, RiCheckboxMultipleBlankFill } from "react-icons/ri";

const SideBarIcon = ({ icon }) => <div className="sidebar-icon">{icon}</div>;

const Logo = ({ icon }) => <div className="logo-icon">{icon}</div>;

function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-white text-gray-900 shadow-lg mx-auto">
      <div className="mb-2">
        <Logo icon={<HiAcademicCap size={15} color="#4ADE80" />} />
      </div>
      <div className="mt-2 mb-2">
        <SideBarIcon icon={<BiHomeAlt size={15} color="#292524" />} />
        <SideBarIcon icon={<HiOutlineTicket size={15} color="#292524" />} />
        <SideBarIcon icon={<BsClipboardCheck size={15} color="#292524" />} />
        <SideBarIcon icon={<BiBox size={15} color="#292524" />} />
        <SideBarIcon icon={<RiBuilding2Line size={15} color="#292524" />} />
      </div>
      <div className="mt-2 mb-2">
        <SideBarIcon icon={<BsPeopleFill size={15} color="#292524" />} />
        <SideBarIcon
          icon={<RiCheckboxMultipleBlankFill size={15} color="#292524" />}
        />
        <SideBarIcon icon={<SiHackthebox size={15} color="#292524" />} />
        <SideBarIcon icon={<BsBoundingBox size={15} color="#292524" />} />
        <SideBarIcon icon={<FaSearchDollar size={15} color="#292524" />} />
      </div>
      <div className="mt-2">
        <SideBarIcon icon={<GrDocumentText size={15} color="#292524" />} />
      </div>
    </div>
  );
}

export default Sidebar;
