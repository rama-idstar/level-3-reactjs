import React from "react";
import Modal from "../../components/modal/modal";

const DeleteKaryawanTraining = ({ karyawanTraining, open, onClose, onConfirm }) => {
  if (!karyawanTraining) return null;

  const handleConfirm = () => {
    onConfirm(karyawanTraining.id);
  };

  return (
    <Modal open={open} onClose={onClose} title="Konfirmasi Hapus">
      <div className="p-4">
        <p>Anda yakin ingin menghapus data berikut?</p>
        <div className="mt-4">
          <strong>Tanggal Training:</strong> {karyawanTraining.trainingDate}
        </div>
        <div className="mt-2">
          <strong>Karyawan:</strong> {karyawanTraining.idKaryawan}
        </div>
        <div className="mt-2">
          <strong>Training:</strong> {karyawanTraining.idTraining}
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteKaryawanTraining;
