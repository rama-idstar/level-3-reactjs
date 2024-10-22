import React from "react";
import Modal from "../../components/modal/modal";

const DetailTraining = ({ training, open, onClose }) => {
  if (!training) return null;

  const { instructor, theme } = training;

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Detail Training"
      body={
        <div>
          <div className="mb-2">
            <strong>Pengajar:</strong> {instructor}
          </div>
          <div className="mb-2">
            <strong>Tema:</strong> {theme}
          </div>
        </div>
      }
    />
  );
};

export default DetailTraining;
