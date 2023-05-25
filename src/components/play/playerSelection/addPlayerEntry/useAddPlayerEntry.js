import { useState } from 'react';

export default function useAddPlayerEntry() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return {
    handleOpenModal,
    isModalOpen,
  };
}
