import React from "react";
import { BiNetworkChart } from "react-icons/bi";

function Relation() {
  return (
    <div className="flex flex-col justify-center mx-4 my-4">
      <div className="flex flex-row justify-between items-center">
        <div className="font-bold text-xl">Relasi</div>
        <a href="" className="font-base text-sm text-green-800">
          Lihat Semua
        </a>
      </div>
      <div className="flex flex-row justify-start items-center mt-6">
        <div>
          <BiNetworkChart size={30} className="" color="#000000" />
        </div>
        <div className="flex flex-col justify-start mx-4">
          <div className="text-2xl font-bold">20</div>
          <div className="text-sm font-light text-gray-600">Memiliki</div>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center mt-4">
        <div>
          <BiNetworkChart size={30} className="" color="#000000" />
        </div>
        <div className="flex flex-col justify-start mx-4">
          <div className="text-2xl font-bold">20</div>
          <div className="text-sm font-light text-gray-600">Memiliki</div>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center mt-4 mb-4">
        <div>
          <BiNetworkChart size={30} className="" color="#000000" />
        </div>
        <div className="flex flex-col justify-start mx-4">
          <div className="text-2xl font-bold">20</div>
          <div className="text-sm font-light text-gray-600">Memiliki</div>
        </div>
      </div>
    </div>
  );
}

export default Relation;
