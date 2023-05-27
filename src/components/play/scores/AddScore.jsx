import React from 'react';
import useAddScore from './useAddScore';

export default function AddScore(props) {
  const { handlePlayerScoreUpdate } = props;

  const {
    changeMultipleFactor,
    handleNewScore,
    multipleFactor,
    playerNewScore,
    resetScore,
    score,
  } = useAddScore(handlePlayerScoreUpdate);

  return (
    <div className="addScore">
      <div className="addScoreNumbers">
        <div
          onClick={() => handleNewScore(1 * multipleFactor)}
          aria-hidden
        >
          <p>{1 * multipleFactor}</p>
        </div>
        <div
          onClick={() => handleNewScore(2 * multipleFactor)}
          aria-hidden
        >
          <p>{2 * multipleFactor}</p>
        </div>
        <div
          onClick={() => handleNewScore(3 * multipleFactor)}
          aria-hidden
        >
          <p>{3 * multipleFactor}</p>
        </div>
        <div
          onClick={() => handleNewScore(4 * multipleFactor)}
          aria-hidden
        >
          <p>{4 * multipleFactor}</p>
        </div>
        <div
          onClick={() => handleNewScore(5 * multipleFactor)}
          aria-hidden
        >
          <p>{5 * multipleFactor}</p>
        </div>
        <div
          onClick={() => handleNewScore(6 * multipleFactor)}
          aria-hidden
        >
          <p>{6 * multipleFactor}</p>
        </div>
        <div
          onClick={() => handleNewScore(7 * multipleFactor)}
          aria-hidden
        >
          <p>{7 * multipleFactor}</p>
        </div>
        <div
          onClick={() => handleNewScore(8 * multipleFactor)}
          aria-hidden
        >
          <p>{8 * multipleFactor}</p>
        </div>
        <div
          onClick={() => handleNewScore(9 * multipleFactor)}
          aria-hidden
        >
          <p>{9 * multipleFactor}</p>
        </div>
      </div>
      <div className="addScoreReset">
        <div
          onClick={() => resetScore()}
          aria-hidden
        ><p>0</p></div>
        <div
          onClick={() => changeMultipleFactor(1)}
          aria-hidden
        ><p>x1</p></div>
      </div>
      <div className="addScoreNumbers">
        <div
          onClick={() => changeMultipleFactor(10)}
          aria-hidden
        ><p>x10</p></div>
        <div
          onClick={() => changeMultipleFactor(100)}
          aria-hidden
        ><p>x100</p></div>
        <div
          onClick={() => changeMultipleFactor(1000)}
          aria-hidden
        ><p>x1000</p></div>
      </div>
      <div className="addScoreReset">
        <p>{score}</p>
        <div
          onClick={() => playerNewScore(score)}
          aria-hidden
        ><p>Ajouter !</p></div>
      </div>
    </div>
  );
}
