import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../logo/Logo';

export default function GameChoice(props) {
  const { gameChoice: { name } } = props;

  return (
    <Link to={`/game-count/play?game=${name}`} className="gameChoiceLink">
      <div className="gameChoice">
        <div className="gameChoiceInfo">
          <img
            src={Logo(name)}
            alt={name}
            className="gameChoiceImg"
          />
          <p className="gameChoiceName">
            {name}
          </p>
        </div>
      </div>
    </Link>
  );
}
