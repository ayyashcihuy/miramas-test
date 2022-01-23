import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import {Switch} from "@headlessui/react"

function Profile() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="profile-section grid container-sm bg-white drop-shadow-xl mx-auto my-6 rounded-lg max-w-sm">
      <div className="relative inline-block">
        <img
          src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
          alt=""
          className="h-40 w-full object-cover"
          id="headers"
        />
        <div>
          <img
            src="https://media-exp1.licdn.com/dms/image/C510BAQGoqPOqFFYp0g/company-logo_200_200/0/1583912202955?e=2159024400&v=beta&t=xPDX0VgQF8SSKRUw-LyxIYDjree8HdJjSsii24viuIU"
            alt=""
            className="rounded-full border-2 border-white absolute left-28 top-20 w-40 h-40 drop-shadow-xl"
          />
        </div>
        <div className="mt-32 text-center font-bold text-xl text-gray-600">
          <a href="">Mitramas Infosys Global</a>
        </div>
        <div className="text-center text-gray-400 mt-2">
          <p>Layanan IT</p>
        </div>
        <div>
        <a
          href=""
          className="flex items-center justify-center mt-6 mr-6 mb-6 text-sm text-green-800"
          >
          <AiFillEdit size={15} className="mx-2" /> Sunting Profile
        </a>
          </div>
          <div className="mx-12 my-6 text-gray-400 text-sm">
            <h1>Status Perusahaan</h1>
            <div className="flex items-center place-content-between">
            <h1 className="text-green-800 font-bold">Aktif</h1>
            <div className="">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
          relative inline-flex flex-shrink-0 h-[20px] w-[38px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-5' : 'translate-x-0'}
            pointer-events-none inline-block h-[16px] w-[16px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
      </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Profile;
