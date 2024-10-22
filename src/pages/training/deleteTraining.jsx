import React from "react";
import Modal from "../../components/modal/modal";

const DeleteModal = ({ training, open, onClose, onConfirm }) => {
  if (!training) return null;

  const handleConfirm = () => {
    if (onConfirm) onConfirm(training.id);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Hapus Training"
      body={
        <div>
          <p>Apakah Anda yakin ingin menghapus training berikut?</p>
          <p><strong>Pengajar:</strong> {training.instructor}</p>
          <p><strong>Tema:</strong> {training.theme}</p>
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

export default DeleteModal;
