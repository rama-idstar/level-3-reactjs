import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import TableWrapper from "../../components/tableWrapper/tableWrapper";
import Modal from "../../components/modal/modal";
import FormRekening from "./formRekening";
import DetailModal from "./detailRekening";
import DeleteModal from "./deleteRekening";

const Rekening = () => {
  const [data, setData] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRekening, setSelectedRekening] = useState(null);

  const fetchData = async () => {
    const storedData = localStorage.getItem("rekening");
    const fetchedData = storedData ? JSON.parse(storedData) : [];
    setData(fetchedData);

    const storedEmployees = localStorage.getItem("karyawan");
    const employeeData = storedEmployees ? JSON.parse(storedEmployees) : [];
    setEmployees(employeeData);

    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleAddClick = () => {
    setSelectedRekening(null);
    setIsFormModalOpen(true);
  };

  const handleUpdateClick = (id) => {
    const rekeningToUpdate = data.find((rek) => rek.id === id);
    setSelectedRekening(rekeningToUpdate);
    setIsFormModalOpen(true);
  };

  const handleFormSubmit = (rekening) => {
    let updatedData;

    if (rekening.id) {
      updatedData = data.map((item) =>
        item.id === rekening.id ? rekening : item
      );
    } else {
      updatedData = [...data, { ...rekening, id: Date.now() }];
    }

    setData(updatedData);

    localStorage.setItem("rekening", JSON.stringify(updatedData));

    setIsFormModalOpen(false);
  };

  const handleCloseFormModal = () => {
    setIsFormModalOpen(false);
  };

  const handleDetailClick = (id) => {
    const rekeningToDetail = data.find((rek) => rek.id === id);
    setSelectedRekening(rekeningToDetail);
    setIsDetailModalOpen(true);
  };

  const handleDeleteClick = (id) => {
    const rekeningToDelete = data.find((rek) => rek.id === id);
    setSelectedRekening(rekeningToDelete);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    localStorage.setItem("rekening", JSON.stringify(updatedData));
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
          { label: "Jenis", key: "jenis" },
          { label: "Nama", key: "nama" },
          { label: "No. Rekening", key: "norek" },
          {
            label: "Karyawan",
            key: "idKaryawan",
            render: (value) => {
              const employee = employees.find(
                (emp) => Number(emp.id) === Number(value)
              );
              return <span>{employee ? employee.name : "Unknown"}</span>;
            },
          },
        ]}
        title="List Data Rekening"
        loading={loading}
        addClick={handleAddClick}
        updateClick={handleUpdateClick}
        detailClick={handleDetailClick}
        deleteClick={handleDeleteClick}
      />

      <Modal
        open={isFormModalOpen}
        onClose={handleCloseFormModal}
        title={selectedRekening ? "Update Rekening" : "Tambah Rekening"}
        body={
          <FormRekening
            data={selectedRekening}
            onSubmit={handleFormSubmit}
            onCancel={handleCloseFormModal}
            employees={employees}
          />
        }
      />

      <DetailModal
        rekening={selectedRekening}
        employees={employees}
        open={isDetailModalOpen}
        onClose={handleCloseDetailModal}
      />

      <DeleteModal
        rekening={selectedRekening}
        open={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
      />
    </Layout>
  );
};

export default Rekening;
