import React from "react";
import "../../styles/Header.css";

function Header() {
  return (
    <div id="headerCont">
      <div className="headerTitleCont">
        <img
          className="pokeBallImg flip"
          src={require("../../images/pokeball.png")}
        ></img>
        <div className="headerTitle">
          <h1>Pokemon</h1>
          <h2>Memory Card Game</h2>
        </div>
        <img
          className="pokeBallImg"
          src={require("../../images/pokeball.png")}
        ></img>
      </div>
    </div>
  );
}

export default Header;
