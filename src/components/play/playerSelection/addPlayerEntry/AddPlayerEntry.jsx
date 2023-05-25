import React from 'react';

import plus from '../../../../assets/plus.png';

import useAddPlayerEntry from './useAddPlayerEntry';

import './styles.css';
import AddPlayerModal from './AddPlayerModal';

export default function AddPlayerEntry(props) {
  const { addPlayer } = props;

  const { handleOpenModal, isModalOpen } = useAddPlayerEntry();

  return (
    <>
      <div
        className="playerTokenBackground"
        onClick={handleOpenModal}
        aria-hidden
      >
        <div className="playerToken">
          <img src={plus} alt="add-player" className="playerTokenImage" />
        </div>
      </div>
      {isModalOpen === true && (
        <AddPlayerModal addPlayer={addPlayer} handleOpenModal={handleOpenModal} />
      )}
    </>
  );
}
