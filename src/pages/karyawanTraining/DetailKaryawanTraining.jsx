import React from "react";
import Modal from "../../components/modal/modal";

const DetailKaryawanTraining = ({ karyawanTraining,employees,trainings, open, onClose }) => {
  if (!karyawanTraining) return null;

  const { trainingDate } = karyawanTraining;
  const employee = employees.find((emp) => parseInt(emp.id) === parseInt(karyawanTraining.idKaryawan));
  const training = trainings.find((train) => parseInt(train.id) === parseInt(karyawanTraining.idTraining));

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Detail Training"
      body={
        <div>
          <div className="mb-2">
            <strong> Nama Karyawan :</strong> {employee.name}
          </div>
          <div className="mb-2">
            <strong>Training :</strong> {training.instructor + " - " + training.theme}
          </div>
          <div className="mb-2">
            <strong>Training Date :</strong> {trainingDate}
          </div>
        </div>
      }
    />
  );
};

export default DetailKaryawanTraining;
