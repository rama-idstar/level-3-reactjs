import React, { useState, useEffect } from "react";

const FormKaryawan = ({ data, onSubmit, onCancel }) => {
  const [name, setName] = useState("");
  const [nik, setNik] = useState("");
  const [npwp, setNpwp] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [status, setStatus] = useState("Y");

  
  useEffect(() => {
    if (data) {
      setName(data.name);
      setNik(data.nik);
      setNpwp(data.npwp);
      setAddress(data.address);
      setDateOfBirth(data.dateOfBirth);
      setStatus(data.status);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newKaryawan = {
      id: data ? data.id : null,
      name,
      nik,
      npwp,
      address,
      dateOfBirth,
      status,
    };
    onSubmit(newKaryawan); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-1">
        <label className="block text-xs font-medium mb-1">Nama</label>
        <input
          type="text"
          className="border px-4 py-1 rounded w-full text-sm"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-1">
        <label className="block text-xs font-medium mb-1">NIK</label>
        <input
          type="text"
         className="border px-4 py-1 rounded w-full text-sm"
          value={nik}
          onChange={(e) => setNik(e.target.value)}
          required
        />
      </div>
      <div className="mb-1">
        <label className="block text-xs font-medium mb-1">NPWP</label>
        <input
          type="text"
          className="border px-4 py-1 rounded w-full text-sm"
          value={npwp}
          onChange={(e) => setNpwp(e.target.value)}
        />
      </div>
      <div className="mb-1">
        <label className="block text-xs font-medium mb-1">Alamat</label>
        <input
          type="text"
          className="border px-4 py-1 rounded w-full text-sm"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="mb-1">
        <label className="block text-xs font-medium mb-1">Tanggal Lahir</label>
        <input
          type="date"
          className="border px-4 py-1 rounded w-full text-sm"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-xs font-medium mb-1">Status</label>
        <select
          className="border px-4 py-1 rounded w-full"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Y">Active</option>
          <option value="N">Inactive</option>
        </select>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          {data ? "Update" : "Tambah"}
        </button>
      </div>
    </form>
  );
};

export default FormKaryawan;
