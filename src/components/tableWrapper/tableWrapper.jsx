import React from 'react';

const TableWrapper = ({
  data,
  columns,
  title,
  loading,
  addClick,
  updateClick,
  detailClick,
  deleteClick
}) => {

  const handleAddClick = () => {
    if (addClick && !loading) addClick();
  };

  const handleUpdateClick = (id) => {
    if (updateClick) updateClick(id);
  };

  const handleDetailClick = (id) => {
    if (detailClick) detailClick(id);
  };

  const handleDeleteClick = (id) => {
    if (deleteClick) deleteClick(id);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <button
          onClick={handleAddClick}
          className={`bg-blue-500 text-white px-4 py-2 rounded-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          Tambah Data
        </button>
      </div>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        {loading ? (
          <div className="text-center py-4">Memuat Data...</div>
        ) : (
          <table className="min-w-full bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-slate-800">
                <th className="py-2 px-4 border-b text-white">No</th>
                {columns.map((col) => (
                  <th key={col.key} className="py-2 px-4 border-b text-white">{col.label}</th>
                ))}
                <th className="py-2 px-4 border-b text-white">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b text-center">{index + 1}</td>
                    {columns.map((col) => (
                      <td key={col.key} className="py-2 px-4 border-b text-center">
                        {col.render ? col.render(item[col.key]) : item[col.key] || " - "}
                      </td>
                    ))}
                    <td className="py-2 px-4 border-b flex space-x-2 justify-center">
                      <button onClick={() => handleDetailClick(item.id)} className="bg-green-500 text-white px-2 py-1 rounded-lg">Detil</button>
                      <button onClick={() => handleUpdateClick(item.id)} className="bg-yellow-500 text-white px-2 py-1 rounded-lg">Ubah</button>
                      <button onClick={() => handleDeleteClick(item.id)} className="bg-red-500 text-white px-2 py-1 rounded-lg">Hapus</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length + 2} className="py-2 px-4 border-b text-center">Belum ada data.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TableWrapper;
