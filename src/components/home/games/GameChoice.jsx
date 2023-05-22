import React from 'react';

export default function GameChoice(props) {
  const { gameChoice } = props;

  return (
    <div className="gameChoice">
      <div className="gameChoiceInfo">
        <img
          src="https://www.regledujeu.fr/wp-content/uploads/6qui-prend.png"
          alt="oui"
          className="gameChoiceImg"
        />
        <p className="gameChoiceName">
          {gameChoice.name}
        </p>
      </div>
    </div>
  );
}
