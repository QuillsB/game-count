import React from 'react';

import PlayersEntry from './PlayersEntry';

import './styles.css';

export default function PlayersSelection(props) {
  const { players, addPlayer, removePlayer } = props;

  return (
    <div className="playersSelection">
      <p className="playersSelectionTitle">Joueurs</p>
      <PlayersEntry players={players} addPlayer={addPlayer} removePlayer={removePlayer} />
    </div>
  )
}
