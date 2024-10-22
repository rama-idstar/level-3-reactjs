import React, { useState, useEffect } from "react";
import TableWrapper from "../../components/tableWrapper/tableWrapper";
import Layout from "../../components/layout/layout";
import Modal from "../../components/modal/modal";
import FormKaryawan from "./formKaryawan";
import DetailModal from "./detailKaryawan";
import DeleteModal from "./deleteKaryawan";

const Karyawan = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedKaryawan, setSelectedKaryawan] = useState(null); 

  const fetchData = () => {
    const storedData = localStorage.getItem("karyawan");
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
    setSelectedKaryawan(null); 
    setIsFormModalOpen(true); 
  };

  const handleUpdateClick = (id) => {
    const karyawanToUpdate = data.find((karyawan) => karyawan.id === id);
    setSelectedKaryawan(karyawanToUpdate); 
    setIsFormModalOpen(true); 
  };

  const handleFormSubmit = (karyawan) => {
    if (selectedKaryawan) {
      const updatedData = data.map((item) =>
        item.id === karyawan.id ? karyawan : item
      );
      setData(updatedData);
    } else {
      const newData = [...data, { ...karyawan, id: Date.now() }];
      setData(newData);
    }
    localStorage.setItem("karyawan", JSON.stringify(data)); 
    setIsFormModalOpen(false); 
  };

  const handleCloseFormModal = () => {
    setIsFormModalOpen(false); 
  };

  const handleDetailClick = (id) => {
    const karyawanToDetail = data.find((karyawan) => karyawan.id === id);
    setSelectedKaryawan(karyawanToDetail);
    setIsDetailModalOpen(true);
  };

  const handleDeleteClick = (id) => {
    const karyawanToDelete = data.find((karyawan) => karyawan.id === id);
    setSelectedKaryawan(karyawanToDelete);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    localStorage.setItem("karyawan", JSON.stringify(updatedData)); 
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
          { label: "Nama", key: "name" },
          { label: "NIK", key: "nik" },
          { label: "NPWP", key: "npwp" },
          { label: "Alamat", key: "address" },
          {
            label: "Status",
            key: "status",
            render: (value) => (
              <div className={`font-bold ${value === "Y" ? "text-green-500" : "text-red-500"}`}>
                {value === "Y" ? "Active" : "Inactive"}
              </div>
            ),
          },
        ]}
        title="List Data Karyawan"
        loading={loading}
        addClick={handleAddClick}
        updateClick={handleUpdateClick}
        detailClick={handleDetailClick}
        deleteClick={handleDeleteClick}
      />

      <Modal
        open={isFormModalOpen}
        onClose={handleCloseFormModal}
        title={selectedKaryawan ? "Update Karyawan" : "Tambah Karyawan"}
        body={
          <FormKaryawan
            data={selectedKaryawan}
            onSubmit={handleFormSubmit}
            onCancel={handleCloseFormModal}
          />
        }
      />

      <DetailModal
        karyawan={selectedKaryawan}
        open={isDetailModalOpen}
        onClose={handleCloseDetailModal}
      />

      <DeleteModal
        karyawan={selectedKaryawan}
        open={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
      />
    </Layout>
  );
};

export default Karyawan;
