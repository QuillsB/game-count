import React, { useState } from 'react';
import getIcon from '../../../logo/Icon';

export default function AddPlayerModal(props) {
  const { addPlayer, handleOpenModal } = props;

  const [playerName, setPlayerName] = useState('');
  const [playerIcon, setPlayerIcon] = useState('');

  const addNewPlayer = () => {
    addPlayer({ name: playerName, icon: playerIcon, score: 0 });
    handleOpenModal();
  };

  const handleChangeIcon = (iconName) => {
    setPlayerIcon(iconName);
  };

  const handleChangeName = (event) => {
    setPlayerName(event.target.value);
  };

  const hasOtherSelectedIcon = (iconName) => ((playerIcon !== '' && playerIcon !== iconName)
    ? 0.3
    : 1
  );

  const hasCompletePlayerInfo = () => (playerIcon !== '' && playerName !== '');

  return (
    <div className="addPlayerModalBackground">
      <div className="addPlayerModalContent">
        <p className="addPlayerModalTitle">Ajout d'un joueur</p>
        <div className="addPlayerModalInputWrapper">
          <p className="addPlayerModalLabel">Nom :</p>
          <input
            placeholder='Michel.le'
            onChange={handleChangeName}
          />
        </div>
        <div className="addPlayerModalIcons">
          <div
            className="addPlayerModalIconBackground"
            onClick={() => handleChangeIcon('predator')}
            aria-hidden
            style={{ 'opacity': hasOtherSelectedIcon('predator') }}
          >
            <div className="addPlayerModalIcon">
              <img src={getIcon('predator')} alt="icon" className="playerTokenImage" />
            </div>
          </div>
          <div
            className="addPlayerModalIconBackground"
            onClick={() => handleChangeIcon('link')}
            aria-hidden
            style={{ 'opacity': hasOtherSelectedIcon('link') }}
          >
            <div className="addPlayerModalIcon">
              <img src={getIcon('link')} alt="icon" className="playerTokenImage" />
            </div>
          </div>
          <div
            className="addPlayerModalIconBackground"
            onClick={() => handleChangeIcon('dino')}
            aria-hidden
            style={{ 'opacity': hasOtherSelectedIcon('dino') }}
          >
            <div className="addPlayerModalIcon">
              <img src={getIcon('dino')} alt="icon" className="playerTokenImage" />
            </div>
          </div>
          <div
            className="addPlayerModalIconBackground"
            onClick={() => handleChangeIcon('darth')}
            aria-hidden
            style={{ 'opacity': hasOtherSelectedIcon('darth') }}
          >
            <div className="addPlayerModalIcon">
              <img src={getIcon('darth')} alt="icon" className="playerTokenImage" />
            </div>
          </div>
          <div
            className="addPlayerModalIconBackground"
            onClick={() => handleChangeIcon('cat')}
            aria-hidden
            style={{ 'opacity': hasOtherSelectedIcon('cat') }}
          >
            <div className="addPlayerModalIcon">
              <img src={getIcon('cat')} alt="icon" className="playerTokenImage" />
            </div>
          </div>
          <div
            className="addPlayerModalIconBackground"
            onClick={() => handleChangeIcon('dog')}
            aria-hidden
            style={{ 'opacity': hasOtherSelectedIcon('dog') }}
          >
            <div className="addPlayerModalIcon">
              <img src={getIcon('dog')} alt="icon" className="playerTokenImage" />
            </div>
          </div>
          <div
            className="addPlayerModalIconBackground"
            onClick={() => handleChangeIcon('sonic')}
            aria-hidden
            style={{ 'opacity': hasOtherSelectedIcon('sonic') }}
          >
            <div className="addPlayerModalIcon">
              <img src={getIcon('sonic')} alt="icon" className="playerTokenImage" />
            </div>
          </div>
          <div
            className="addPlayerModalIconBackground"
            onClick={() => handleChangeIcon('gandalf')}
            aria-hidden
            style={{ 'opacity': hasOtherSelectedIcon('gandalf') }}
          >
            <div className="addPlayerModalIcon">
              <img src={getIcon('gandalf')} alt="icon" className="playerTokenImage" />
            </div>
          </div>
        </div>
        <div
          className="addPlayerModalButtonBackground"
          onClick={addNewPlayer}
          aria-hidden
          style={{ 'opacity': hasCompletePlayerInfo() ? 1 : 0.3 }}
        >
          <div className="addPlayerModalButton">
            <p>Ajouter</p>
          </div>
        </div>
      </div>
    </div>
  );
}
