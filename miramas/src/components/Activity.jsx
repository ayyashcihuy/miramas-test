import React from "react";

function Activity() {
  return (
    <div className="flex flex-col justify-start mx-4 my-4">
      <h1 className="font-bold text-xl">Aktivitas</h1>
      <div className="mt-6">
        <div className="my-6">
          <h1>
            Yusron baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa
          </h1>
          <h1 className="text-sm font-light text-gray-400">Hari ini, 06:00</h1>
        </div>
        <div className="my-6">
          <h1>
            Bintang baru saja menghapus sublokasi KCP Tebet 4 dari induk Kantor
            Cabang Tebet
          </h1>
          <h1 className="text-sm font-light text-gray-400">Hari ini, 06:00</h1>
        </div>
        <div className="my-6">
          <h1>
            Yusron melakukan perubahan profil pada induk Kantor Cabang Bekasi
          </h1>
          <h1 className="text-sm font-light text-gray-400">Hari ini, 06:00</h1>
        </div>
      </div>
    </div>
  );
}

export default Activity;
