import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import TableWrapper from "../../components/tableWrapper/tableWrapper";
import Modal from "../../components/modal/modal";
import FormKaryawanTraining from "./formKaryawanTraining";
import DeleteKaryawanTraining from "./DeleteKaryawanTraining";
import DetailKaryawanTraining from "./DetailKaryawanTraining";

const KaryawanTraining = () => {
  const [data, setData] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedKaryawanTraining, setSelectedKaryawanTraining] = useState(null);

  const fetchData = async () => {
    const storedData = localStorage.getItem("karyawanTraining");
    const fetchedData = storedData ? JSON.parse(storedData) : [];
    setData(fetchedData);

    const storedEmployees = localStorage.getItem("karyawan");
    const employeeData = storedEmployees ? JSON.parse(storedEmployees) : [];
    setEmployees(employeeData);

    const storedTrainings = localStorage.getItem("training");
    const trainingData = storedTrainings ? JSON.parse(storedTrainings) : [];
    setTrainings(trainingData);

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddClick = () => {
    setSelectedKaryawanTraining(null);
    setIsFormModalOpen(true);
  };

  const handleUpdateClick = (id) => {
    const karyawanTrainingToUpdate = data.find((item) => item.id === id);
    setSelectedKaryawanTraining(karyawanTrainingToUpdate);
    setIsFormModalOpen(true);
  };

  const handleFormSubmit = (karyawanTraining) => {
    let updatedData;
  
    if (karyawanTraining.id) {
      
      updatedData = data.map((item) =>
        item.id === karyawanTraining.id ? karyawanTraining : item
      );
    } else {
      
      updatedData = [...data, { ...karyawanTraining, id: Date.now() }];
    }
  
    
    setData(updatedData);
    localStorage.setItem("karyawanTraining", JSON.stringify(updatedData));
  
    setIsFormModalOpen(false);
  };
  

  const handleCloseFormModal = () => {
    setIsFormModalOpen(false);
  };

  const handleDetailClick = (id) => {
    const karyawanTrainingToDetail = data.find((item) => item.id === id);
    setSelectedKaryawanTraining(karyawanTrainingToDetail);
    setIsDetailModalOpen(true);
  };

  const handleDeleteClick = (id) => {
    const karyawanTrainingToDelete = data.find((item) => item.id === id);
    setSelectedKaryawanTraining(karyawanTrainingToDelete);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    localStorage.setItem("karyawanTraining", JSON.stringify(updatedData));
  };

  const handleCloseDetailModal = () => {
    setIsDetailModalOpen(false);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <Layout>
      <TableWrapper
        data={data}
        columns={[
          { label: "Tanggal Training", key: "trainingDate" },
          { label: "Karyawan", key: "idKaryawan", render: (value) => {
            const employee = employees.find((emp) => parseInt(emp.id) === parseInt(value));
            return <span>{employee ? employee.name : "Unknown"}</span>;
          }},
          { label: "Training", key: "idTraining", render: (value) => {
            const training = trainings.find((train) => parseInt(train.id) === parseInt(value));
            return <span>{training ? training.theme : "Unknown"}</span>;
          }},
        ]}
        title="List Data Karyawan Training"
        loading={loading}
        addClick={handleAddClick}
        updateClick={handleUpdateClick}
        detailClick={handleDetailClick}
        deleteClick={handleDeleteClick}
      />

      <Modal
        open={isFormModalOpen}
        onClose={handleCloseFormModal}
        title={selectedKaryawanTraining ? "Update Karyawan Training" : "Tambah Karyawan Training"}
        body={
          <FormKaryawanTraining
            data={selectedKaryawanTraining}
            onSubmit={handleFormSubmit}
            onCancel={handleCloseFormModal}
            employees={employees}
            trainings={trainings}
          />
        }
      />

      <DetailKaryawanTraining
        karyawanTraining={selectedKaryawanTraining}
        employees={employees}
        trainings={trainings}
        open={isDetailModalOpen}
        onClose={handleCloseDetailModal}
      />

      <DeleteKaryawanTraining
        karyawanTraining={selectedKaryawanTraining}
        open={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
      />
    </Layout>
  );
};

export default KaryawanTraining;
