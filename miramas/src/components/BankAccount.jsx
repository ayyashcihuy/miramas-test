import React from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

function BankAccount() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center p-4">
        <h1 className="font-bold text-xl">Akun Bank</h1>
        <button
          type="submit"
          className="flex justify-center py-2 px-8 border border-transparent text-sm font-medium rounded-md text-white bg-green-800 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          + Tambah Akun Bank
        </button>
      </div>
      <div className="flex flex-row justify-start items-start p-4">
        <div class="relative h-36 w-48 rounded bg-gradient-to-r from-yellow-600 to-green-800">
          <div class="absolute bottom-0 right-0 h-10 w-16 font-bold text-xl text-white italic">
            VISA
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mx-4 font-bold">
            <div className="flex flex-row items-center">
              <div>Bank KB Bukopin</div>
              <BsPencilSquare size={15} className="mx-2" color="#65a30d" />
              <BsTrash size={15} className="" color="#dc2626" />
            </div>
          </div>
          <div className="mt-16 py-2 mx-4 text-gray-600">
            <div>**** 0876 - Yusron Taufiq</div>
            <div>IDR</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start items-start p-4">
        <div class="relative h-36 w-48 rounded bg-gradient-to-r from-green-400 to-blue-500">
          <div class="absolute bottom-0 right-0 h-10 w-16 font-bold text-xl text-white italic">
            VISA
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mx-4 font-bold">
            <div className="flex flex-row items-center">
              <div className="flex flex-row items-center">
                <div>Citibank, NA</div>
                <BsPencilSquare size={15} className="mx-2" color="#65a30d" />
                <BsTrash size={15} className="" color="#dc2626" />
              </div>
            </div>
          </div>
          <div className="mt-16 py-2 mx-4 text-gray-600">
            <div>**** 5525 - Si Tampan</div>
            <div>USD</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankAccount;
