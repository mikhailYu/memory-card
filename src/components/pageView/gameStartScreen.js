import { useState } from "react";
import "../../styles/MiscScreens.css";

function PreGameScreen(props) {
  return (
    <div className="textScreenCont rulesCont">
      <div className="textBoxCont ">
        <h1 className="rulesH1">RULES:</h1>
        <div className="rulesTextCont">
          <p>
            Hello, this is a Pokemon Memory Card Game made in Javascript
            utilizing React.
          </p>
          <p>
            <span className="redText"> Do not click</span> on the same Card
            twice. You gain <span className="goldText"> points</span> for every
            card clicked and for completing levels. Additionally the amount of
            <span className="goldText"> points</span> you earn is{" "}
            <span className="goldText"> increased </span>
            with each level. You gain a <span className="redText">
              {" "}
              heart
            </span>{" "}
            every 3 levels. Any extra hearts get converted to bonus{" "}
            <span className="goldText"> points</span>.
          </p>
          <p>
            You can unlock <span className="redText"> bonus levels</span> once
            you get a certain amount of{" "}
            <span className="goldText"> points</span>. They aren't scored, all
            you have to do is see if you can beat them. Good luck!
          </p>
        </div>
      </div>
      <div className="screenButtonsCont startGameButtonCont">
        <button
          className="screenButton startGameButton"
          onClick={() => {
            props.startGame();
          }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

export default PreGameScreen;
