import React from "react";
import { MdOutlineHomeWork } from "react-icons/md";
import { ImWrench } from "react-icons/im";
import { FaWarehouse } from "react-icons/fa";

function Location() {
  return (
    <div className=" bg-white drop-shadow-xl my-4 rounded-lg max-w-full">
      <div className="flex flex-row justify-between p-2 mx-4 pt-6 items-center">
        <h1 className="font-bold text-lg">Lokasi</h1>
        <h1 className="text-sm text-green-800">Lihat Semua</h1>
      </div>
      <div className="flex flex-row justify-items-center p-2 mx-2 pb-6 items-center">
        <div className="basis-1/3 bg-green-800 mx-2 rounded">
          <div className="flex flex-row justify-between p-2 mx-2 items-center">
            <MdOutlineHomeWork size={50} className="mr-2" color="#ffffff" />
            <div>
              <div className="text-white flex flex-col justify-items-stretch">
                <h1 className="text-3xl font-bold text-right">20</h1>
                <h2 className="text-sm font-light">Induk</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/3 bg-green-600 mx-2 rounded">
          <div className="flex flex-row justify-between p-2 mx-2 items-center">
            <ImWrench size={50} className="mr-2" color="ffffff" />
            <div>
              <div className="text-white flex flex-col justify-items-stretch">
                <h1 className="text-3xl font-bold text-right">3</h1>
                <h2 className="text-sm font-light">Sub Lokasi Level 1</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/3 bg-green-400 mx-2 rounded">
          <div className="flex flex-row justify-between p-2 mx-2 items-center">
            <FaWarehouse size={50} className="mr-2" color="#ffffff" />
            <div>
              <div className="text-white flex flex-col justify-items-stretch">
                <h1 className="text-3xl font-bold text-right">3</h1>
                <h2 className="text-sm font-light">Sub Lokasi Level 2</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
