import React, { useState, useEffect } from "react";

const FormTraining = ({ data, onSubmit, onCancel }) => {
  const [instructor, setInstructor] = useState("");
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (data) {
      setInstructor(data.instructor);
      setTheme(data.theme);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTraining = {
      id: data ? data.id : null,
      instructor,
      theme,
    };
    onSubmit(newTraining);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Pengajar</label>
        <input
          type="text"
          className="border px-3 py-2 rounded w-full"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Tema</label>
        <input
          type="text"
          className="border px-3 py-2 rounded w-full"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          required
        />
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

export default FormTraining;
