import React from 'react';

import GameChoices from '../../components/home/games/GameChoices';

import './styles.css';

export default function Home() {
  return (
    <div className="home">
      <p className="homeTitle">Sélection du jeu</p>
      <GameChoices />
    </div>
  );
}
