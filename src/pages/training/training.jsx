import React, { useState, useEffect } from "react";
import TableWrapper from "../../components/tableWrapper/tableWrapper";
import Layout from "../../components/layout/layout";
import Modal from "../../components/modal/modal";
import FormTraining from "./formTraining";
import DetailModal from "./detailTraining";
import DeleteModal from "./deleteTraining";

const Training = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedTraining, setSelectedTraining] = useState(null);

  const fetchData = () => {
    const storedData = localStorage.getItem("training");
    return storedData ? JSON.parse(storedData) : [];
  };

  useEffect(() => {
    const loadData = async () => {
      const fetchedData = fetchData();
      setData(fetchedData);
      setLoading(false);
    };
    loadData();
  }, []);

  const handleAddClick = () => {
    setSelectedTraining(null);
    setIsFormModalOpen(true);
  };

  const handleUpdateClick = (id) => {
    const trainingToUpdate = data.find((training) => training.id === id);
    setSelectedTraining(trainingToUpdate);
    setIsFormModalOpen(true);
  };

  const handleFormSubmit = (training) => {
    let updatedData;

    if (training.id) {
      updatedData = data.map((item) =>
        item.id === training.id ? training : item
      );
    } else {
      updatedData = [...data, { ...training, id: Date.now() }];
    }

    setData(updatedData);

    localStorage.setItem("training", JSON.stringify(updatedData));

    setIsFormModalOpen(false);
  };

  const handleCloseFormModal = () => {
    setIsFormModalOpen(false);
  };

  const handleDetailClick = (id) => {
    const trainingToDetail = data.find((training) => training.id === id);
    setSelectedTraining(trainingToDetail);
    setIsDetailModalOpen(true);
  };

  const handleDeleteClick = (id) => {
    const trainingToDelete = data.find((training) => training.id === id);
    setSelectedTraining(trainingToDelete);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    localStorage.setItem("training", JSON.stringify(updatedData));
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
          { label: "Pengajar", key: "instructor" },
          { label: "Tema", key: "theme" },
        ]}
        title="List Data Training"
        loading={loading}
        addClick={handleAddClick}
        updateClick={handleUpdateClick}
        detailClick={handleDetailClick}
        deleteClick={handleDeleteClick}
      />

      <Modal
        open={isFormModalOpen}
        onClose={handleCloseFormModal}
        title={selectedTraining ? "Update Training" : "Tambah Training"}
        body={
          <FormTraining
            data={selectedTraining}
            onSubmit={handleFormSubmit}
            onCancel={handleCloseFormModal}
          />
        }
      />

      <DetailModal
        training={selectedTraining}
        open={isDetailModalOpen}
        onClose={handleCloseDetailModal}
      />

      <DeleteModal
        training={selectedTraining}
        open={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
      />
    </Layout>
  );
};

export default Training;
