import { useState } from 'react';

export default function usePlay() {
  const [players, setPlayers] = useState([]);

  const addPlayer = (newPlayer) => {
    const newPlayerList = [ ...players];
    newPlayerList.push(newPlayer);

    setPlayers(newPlayerList);
  };

  return {
    addPlayer,
    players,
  };
}
