import React from 'react';

export default function UserScore(props) {
  const { player, isActualPlayer, handleSelectPlayer } = props;

  return (
    <div onClick={() => handleSelectPlayer(player.name)}>
      <p
        className={isActualPlayer === true ? 'selectedUserScore' : 'userScore'}
      >
        {player.name} - {player.score}
      </p>
    </div>
  );
}
