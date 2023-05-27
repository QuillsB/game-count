import React from 'react';

import UserScore from './UserScore';

export default function UsersScore(props) {
  const { players, actualPlayer, handleSelectPlayer } = props;

  const displayUserScore = () => (
    players.map((player) => (
      <UserScore
        player={player}
        isActualPlayer={player.name === actualPlayer.name}
        handleSelectPlayer={handleSelectPlayer}
        key={player.name}
      />
    ))
  )

  return (
    <div className="usersScore">
      {displayUserScore()}
    </div>
  )
}
