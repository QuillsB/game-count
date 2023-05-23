import React from 'react';
import Logo from '../../logo/Logo';

export default function GameChoice(props) {
  const { gameChoice: { name } } = props;

  return (
    <div
      className="gameChoice"
    >
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
  );
}
