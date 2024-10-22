import React from 'react';
import Modal from '../../components/modal/modal';

const DetailModal = ({ karyawan, open, onClose }) => {
    if (!open || !karyawan) return null;
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Detail Karyawan"
      body={
        <div>
          <p><strong>Nama:</strong> {karyawan.name}</p>
          <p><strong>NIK:</strong> {karyawan.nik}</p>
          <p><strong>NPWP:</strong> {karyawan.npwp}</p>
          <p><strong>Tanggal Lahir:</strong> {karyawan.dateOfBirth}</p>
          <p><strong>Alamat:</strong> {karyawan.address}</p>
          <p><strong>Status:</strong> {karyawan.status === 'Y' ? 'Active' : 'Inactive'}</p>
        </div>
      }
    />
  );
};

export default DetailModal;
