import React from 'react';

import PlayersSelection from '../../components/play/playerSelection/PlayersSelection';
import Scores from '../../components/play/scores/Scores';

import usePlay from './usePlay';

import './styles.css';

export default function Play() {
  const queryParameters = new URLSearchParams(window.location.search)
  const game = queryParameters.get("game")

  const { players, addPlayer, modifyPlayerScore, removePlayer } = usePlay();

  return (
    <div className="play">
      <p className="playTitle">{game}</p>
      <PlayersSelection players={players} addPlayer={addPlayer} removePlayer={removePlayer} />
      <Scores players={players} modifyPlayerScore={modifyPlayerScore} />
    </div>
  );
}
