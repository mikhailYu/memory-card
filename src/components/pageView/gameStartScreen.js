import { useState } from "react";
import "../../styles/MiscScreens.css";

function PreGameScreen(props) {
  return (
    <div className="textScreenCont">
      <div className="textBoxCont">
        <h1 className="rulesH1">RULES:</h1>
        <div className="rulesTextCont">
          <p>
            Hello, this is a Pokemon Memory Card Game made in Javascript
            utilizing React.
          </p>
          <p>
            The rules are simple. <span className="redText"> Do not click</span>{" "}
            on the same Pokemon twice. As you progress, the levels get more
            difficult. You gain <span className="goldText"> points</span> for
            every card clicked and for completing levels. Additionally the
            amount of<span className="goldText"> points</span> you earn per card
            is <span className="goldText"> increased </span>
            the further you get.
          </p>
          <p>
            You can unlock <span className="redText"> bonus levels</span> once
            you get a certain amount of{" "}
            <span className="goldText"> points</span>. They aren't scored, all
            you have to do is see if you can beat them. Good luck!
          </p>
        </div>
      </div>
      <div className="screenButtonsCont">
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
