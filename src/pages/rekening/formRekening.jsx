import React, { useState, useEffect } from "react";

const FormRekening = ({ data, onSubmit, onCancel, employees }) => {
  const [jenis, setJenis] = useState("");
  const [nama, setNama] = useState("");
  const [norek, setNorek] = useState("");
  const [idKaryawan, setIdKaryawan] = useState("");

  useEffect(() => {
    if (data) {
      setJenis(data.jenis);
      setNama(data.nama);
      setNorek(data.norek);
      setIdKaryawan(data.idKaryawan);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRekening = {
      id: data ? data.id : null,
      jenis,
      nama,
      norek,
      idKaryawan,
    };
    onSubmit(newRekening);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Jenis</label>
        <input
          type="text"
          className="border px-3 py-2 rounded w-full"
          value={jenis}
          onChange={(e) => setJenis(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Nama</label>
        <input
          type="text"
          className="border px-3 py-2 rounded w-full"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">No. Rekening</label>
        <input
          type="text"
          className="border px-3 py-2 rounded w-full"
          value={norek}
          onChange={(e) => setNorek(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Karyawan</label>
        <select
          className="border px-3 py-2 rounded w-full"
          value={idKaryawan}
          onChange={(e) => setIdKaryawan(e.target.value)}
          required
        >
          <option value="">Pilih Karyawan</option>
          {employees.map((emp) => (
            <option key={emp.id} value={emp.id}>
              {emp.name}
            </option>
          ))}
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

export default FormRekening;
