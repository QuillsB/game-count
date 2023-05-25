import React from 'react';
import AddPlayerEntry from './addPlayerEntry/AddPlayerEntry';

import PlayerEntry from './PlayerEntry';

export default function PlayersEntry(props) {
  const { players, addPlayer } = props;

  const displayEntries = () => (
    players.map((player) => (
      <PlayerEntry key={player.name} player={player} />
    ))
  );

  return (
    <div className="playersEntry">
      {displayEntries()}
      <AddPlayerEntry addPlayer={addPlayer} />
    </div>
  );
}
