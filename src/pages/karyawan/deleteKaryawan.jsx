import React from 'react';
import Modal from '../../components/modal/modal';

const DeleteModal = ({ karyawan, open, onClose, onConfirm }) => {
  if (!open || !karyawan) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Hapus Karyawan"
      body={
        <div>
          <p>Anda yakin ingin menghapus data karyawan berikut?</p>
          <p><strong>Nama:</strong> {karyawan.name}</p>
          <p><strong>NIK:</strong> {karyawan.nik}</p>
          <div className="flex justify-end space-x-2 mt-4">
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onConfirm(karyawan.id);
                onClose();
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Hapus
            </button>
          </div>
        </div>
      }
    />
  );
};

export default DeleteModal;
