import { useEffect, useState } from "react";
import "../../styles/MiscScreens.css";

function GameOverScreen(props) {
  function generatePostGameMsg() {
    if (props.getCurrStage() == "main") {
      return (
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
      );
    } else if (props.getCurrStage() == "bonus1" && props.isWon) {
      return (
        <div className="textBoxCont">
          <h1 className="gameOverH1">Nice one!</h1>
          <div className="gameOverMessage bonus1">
            <span className="goldText">Bonus 1 </span> complete!
          </div>
        </div>
      );
    } else if (props.getCurrStage() == "bonus2" && props.isWon) {
      return (
        <div className="textBoxCont">
          <h1 className="gameOverH1" style={{ textDecoration: "none" }}>
            🔥🔥🔥
          </h1>
          <div className="gameOverMessage bonus2">
            <p>
              <span className="goldText">Bonus 2</span> complete!
            </p>

            <p>
              Congratulations! You've beaten every stage in the game! Feedback
              is greatly appreciated so feel free to message me. Cheers!
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="textBoxCont">
          <h1 className="gameOverH1Solo">Game Over</h1>
        </div>
      );
    }
  }
  function h1Text() {
    if (props.isWon == false) {
      return <h1 className="gameOverH1">Game Over</h1>;
    } else {
      return (
        <h1 className="gameOverH1" style={{ fontSize: "40px" }}>
          You Win!
        </h1>
      );
    }
  }

  function displayBonus1() {
    if (props.bonus1()) {
      return (
        <div className="singleBtnCont">
          <button
            className="screenButton bonus1Button"
            onClick={() => {
              props.selectBonus("bonus1");
            }}
          >
            Bonus 1
          </button>
        </div>
      );
    }
  }

  function displayBonus2() {
    if (props.bonus2()) {
      return (
        <div className="singleBtnCont">
          <button
            className="screenButton bonus2Button"
            onClick={() => {
              props.selectBonus("bonus2");
            }}
          >
            Bonus 2
          </button>
        </div>
      );
    }
  }
  return (
    <div className="textScreenCont gameOverScreen">
      {generatePostGameMsg()}
      <div className="screenButtonsCont gameOverButtons">
        <div className="singleBtnCont">
          <button
            className="screenButton retryButton"
            onClick={() => {
              props.retry();
            }}
          >
            Retry?
          </button>
        </div>
        {displayBonus1()}
        {displayBonus2()}
      </div>
    </div>
  );
}

export default GameOverScreen;
