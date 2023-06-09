import { useState } from 'react';

export default function usePlay() {
  const [players, setPlayers] = useState([]);

  const addPlayer = (newPlayer) => {
    const newPlayerList = [ ...players];
    newPlayerList.push(newPlayer);

    setPlayers(newPlayerList);
  };

  const removePlayer = (playerToRemove) => {
    const playersToKeep = players.filter((player) => (player.name !== playerToRemove.name || player.icon !== playerToRemove.icon));

    setPlayers(playersToKeep);
  };

  const modifyPlayerScore = (updatedPlayer, newScore) => {
    const playerToUpdateIndex = players.findIndex((player) => player.name === updatedPlayer.name);

    const playersCopy = JSON.parse(JSON.stringify(players));;

    playersCopy[playerToUpdateIndex].score = newScore;

    setPlayers(playersCopy);
  };

  return {
    addPlayer,
    modifyPlayerScore,
    players,
    removePlayer,
  };
}
