import React from 'react';

import GameChoice from './GameChoice';

import choices from '../../../data/gameChoices';

import './styles.css';

export default function GameChoices() {
  const displayGames = () => (
    choices.map((game) => (
      <GameChoice gameChoice={game} key={game.name} />
    ))
  );

  return (
    <div className="gameChoices">
      {displayGames()}
    </div>
  );
}
