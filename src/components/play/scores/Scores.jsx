import React from 'react';

import AddScore from './AddScore';
import UsersScore from './UsersScore';

import useScores from './useScores';

import './styles.css';

export default function Scores(props) {
  const { modifyPlayerScore, players } = props;

  const {
    actualPlayer,
    handlePlayerScoreUpdate,
    handleSelectPlayer,
  } = useScores(players, modifyPlayerScore);

  return (
    <div className="scores">
      <UsersScore
        players={players}
        actualPlayer={actualPlayer}
        handleSelectPlayer={handleSelectPlayer}
      />
      <AddScore handlePlayerScoreUpdate={handlePlayerScoreUpdate} />
    </div>
  );
}
