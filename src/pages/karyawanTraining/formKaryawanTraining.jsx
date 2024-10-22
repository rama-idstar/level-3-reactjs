import React, { useState, useEffect } from "react";

const FormKaryawanTraining = ({ data, onSubmit, onCancel, employees, trainings }) => {
  const [trainingDate, setTrainingDate] = useState("");
  const [idKaryawan, setIdKaryawan] = useState("");
  const [idTraining, setIdTraining] = useState("");

  useEffect(() => {
    if (data) {
      setTrainingDate(data.trainingDate);
      setIdKaryawan(data.idKaryawan);
      setIdTraining(data.idTraining);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newKaryawanTraining = {
      id: data ? data.id : null,
      trainingDate,
      idKaryawan,
      idTraining,
    };
    onSubmit(newKaryawanTraining);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Tanggal Training</label>
        <input
          type="date"
          className="border px-3 py-2 rounded w-full"
          value={trainingDate}
          onChange={(e) => setTrainingDate(e.target.value)}
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
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Training</label>
        <select
          className="border px-3 py-2 rounded w-full"
          value={idTraining}
          onChange={(e) => setIdTraining(e.target.value)}
          required
        >
          <option value="">Pilih Training</option>
          {trainings.map((train) => (
            <option key={train.id} value={train.id}>
              {train.theme} - {train.instructor}
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

export default FormKaryawanTraining;
