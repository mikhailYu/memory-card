let bestScore = 0;

function setBestScore(score) {
  if (score > bestScore) {
    bestScore = score;
  }
  return bestScore;
}

export default setBestScore;
