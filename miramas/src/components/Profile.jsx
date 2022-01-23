import React from "react";
import { AiFillEdit } from "react-icons/ai";

function Profile() {
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
        <a
          href=""
          className="flex items-center justify-center mt-6 mr-6 text-sm text-green-800"
        >
          <AiFillEdit size={15} className="mx-2" /> Sunting Profile
        </a>
      </div>
    </div>
  );
}

export default Profile;
