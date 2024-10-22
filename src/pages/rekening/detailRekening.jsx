import React from "react";
import Modal from "../../components/modal/modal";

const DetailRekening = ({ rekening, employees, open, onClose }) => {
  if (!rekening) return null;

  const employee = employees.find(emp => Number(emp.id) === Number(rekening.idKaryawan));

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Detail Rekening"
      body={
        <div>
          <div className="mb-2">
            <strong>Jenis:</strong> {rekening.jenis}
          </div>
          <div className="mb-2">
            <strong>Nama:</strong> {rekening.nama}
          </div>
          <div className="mb-2">
            <strong>No. Rekening:</strong> {rekening.norek}
          </div>
          <div className="mb-2">
            <strong>ID Karyawan:</strong> {employee ? employee.name : "Unknown"}
          </div>
        </div>
      }
    />
  );
};

export default DetailRekening;
