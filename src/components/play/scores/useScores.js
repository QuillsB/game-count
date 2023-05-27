import { useState } from 'react';

export default function useScores(players, modifyPlayerScore) {
  const [actualPlayer, setActualPlayer] = useState({});

  const handlePlayerScoreUpdate = (newScore) => {
    modifyPlayerScore(actualPlayer, (newScore + actualPlayer.score));
    setActualPlayer({ ...actualPlayer, score: newScore + actualPlayer.score })
  };

  const handleSelectPlayer = (playerName) => {
    const player = players.find((player) => player.name === playerName);

    setActualPlayer(player);
  };

  return {
    actualPlayer,
    handlePlayerScoreUpdate,
    handleSelectPlayer,
  };
}