import { useEffect, useState } from "react";
import "../../styles/MiscScreens.css";

function GameOverScreen(props) {
  function h1Text() {
    if (props.isWon == false) {
      return <h1 className="gameOverH1">Game Over</h1>;
    } else {
      return (
        <h1 className="gameOverH1" style={{ fontSize: "40px" }}>
          Congrats! You Win!
        </h1>
      );
    }
  }
  return (
    <div className="textScreenCont gameOverScreen">
      <div className="textBoxCont">
        {h1Text()}
        <div className="scoreGameOver">
          <p>Score:{props.displaysScore}</p>
          <p>
            <span className="bestScoreSpan">Best Score:</span>
            {props.displayBestScore}
          </p>
        </div>
      </div>

      <div className="screenButtonsCont gameOverButtons">
        <button
          className="screenButton retryButton"
          onClick={() => {
            props.retry();
          }}
        >
          Retry?
        </button>
        <button
          className="screenButton bonus1Button"
          onClick={() => {
            props.retry();
          }}
        >
          Bonus 1
        </button>
        <button
          className="screenButton bonus2Button"
          onClick={() => {
            props.retry();
          }}
        >
          Bonus 2
        </button>
      </div>
    </div>
  );
}

export default GameOverScreen;
