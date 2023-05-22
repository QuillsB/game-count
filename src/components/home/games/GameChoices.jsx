import React from 'react';

import GameChoice from './GameChoice';

import games from '../../../data/games';

import './styles.css';

export default function GameChoices() {
  const displayGames = () => (
    games.map((game) => (
      <GameChoice gameChoice={game} key={game.name} />
    ))
  );

  return (
    <div className="gameChoices">
      {displayGames()}
    </div>
  );
}
