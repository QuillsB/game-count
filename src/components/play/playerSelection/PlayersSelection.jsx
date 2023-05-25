import React from 'react';

import PlayersEntry from './PlayersEntry';

import './styles.css';

export default function PlayersSelection(props) {
  const { players, addPlayer } = props;

  return (
    <div className="playersSelection">
      <p className="playersSelectionTitle">Joueurs</p>
      <PlayersEntry players={players} addPlayer={addPlayer} />
    </div>
  )
}
