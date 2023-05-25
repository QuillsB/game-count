import React from 'react';
import PlayersSelection from '../../components/play/playerSelection/PlayersSelection';

import usePlay from './usePlay';

import './styles.css';

export default function Play() {
  const queryParameters = new URLSearchParams(window.location.search)
  const game = queryParameters.get("game")

  const { players, addPlayer } = usePlay();

  return (
    <div className="play">
      <p className="playTitle">{game}</p>
      <PlayersSelection players={players} addPlayer={addPlayer} />
    </div>
  );
}
