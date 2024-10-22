import React from "react";
import Modal from "../../components/modal/modal";

const DeleteRekening = ({ rekening, open, onClose, onConfirm }) => {
  if (!rekening) return null;

  const handleConfirm = () => {
    if (onConfirm) onConfirm(rekening.id);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Hapus Rekening"
      body={
        <div>
          <p>Apakah Anda yakin ingin menghapus rekening berikut?</p>
          <p><strong>Jenis:</strong> {rekening.jenis}</p>
          <p><strong>Nama:</strong> {rekening.nama}</p>
          <p><strong>No. Rekening:</strong> {rekening.norek}</p>
          <div className="flex justify-end space-x-2 mt-4">
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Batal
            </button>
            <button
              onClick={handleConfirm}
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

export default DeleteRekening;
