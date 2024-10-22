import React from 'react';

const Modal = ({ title, body, open, onClose }) => {
  if (!open) return null; 

  const handleClose = () => {
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 md:mx-0 md:w-3/4 lg:w-1/2 relative max-h-90% overflow-auto my-8">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700 text-xl">&times;</button>
        </div>
        <div className="p-4">
          {body}
        </div>
      </div>
    </div>
  );
};

export default Modal;
