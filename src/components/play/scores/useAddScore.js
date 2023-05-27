import { useState } from 'react';

export default function useAddScore(handlePlayerScoreUpdate) {
  const [multipleFactor, setMultipleFactor] = useState(1);
  const [score, setScore] = useState(0);

  const changeMultipleFactor = (newMultipleFactor) => {
    setMultipleFactor(newMultipleFactor);
  };

  const handleNewScore = (newScore) => {
    const completeScore = score + newScore;

    setScore(completeScore);
  };

  const resetScore = () => {
    setScore(0);
  };

  const playerNewScore = () => {
    handlePlayerScoreUpdate(score);
    resetScore();
  };

  return {
    changeMultipleFactor,
    handleNewScore,
    multipleFactor,
    playerNewScore,
    resetScore,
    score,
  };
}
