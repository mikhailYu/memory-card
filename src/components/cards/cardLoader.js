import { useEffect, useState } from "react";
import pokemonStorage from "../levels/pokemonStorage";
import levelStorage from "../levels/levels";
import { levelStorageBonus1, levelStorageBonus2 } from "../levels/levels-bonus";
import CardCreate from "./cardCreate";
import uniqid from "uniqid";
import shuffleCards from "./shuffleOrder";

function CardLoader(props) {
  let loadLevel = props.getLevel();
  let stage = props.getCurrStage();
  let cards = loadLevelSelector();
  let numToLoad = cards.length;
  let cardsToLoad = [];
  const [calledCards, setCalledCards] = useState(loadCards());
  let winCount = 0;

  function loadCards() {
    cards.forEach((card) => {
      let getCard = pokemonStorage.find((key) => key.pkmnName == card);

      cardsToLoad.push(
        <CardCreate
          info={getCard}
          isClicked={{ value: false, writable: true }}
          key={uniqid()}
          clicked={cardClicked}
          gameOver={passLoss}
          addScore={passAddScore}
        />
      );
    });
    updateGridCols();
    return shuffleCards(cardsToLoad);
  }

  function loadLevelSelector() {
    if (stage == "main") {
      return levelStorage[loadLevel].cards;
    } else if (stage == "bonus1") {
      return levelStorageBonus1[loadLevel].cards;
    } else {
      return levelStorageBonus2[loadLevel].cards;
    }
  }
  function passLoss() {
    props.playerLost();
    reShuffleCards();
  }

  function passAddScore() {
    props.addScore();
  }
  function cardClicked(passedID) {
    let getCardByID;
    cardsToLoad.forEach((component) => {
      if (passedID === component.props.info.ID) {
        getCardByID = component;
      }
    });

    markCardAsClicked(getCardByID);
  }

  function markCardAsClicked(card) {
    let tempCardList = cardsToLoad;
    cardsToLoad = [];

    tempCardList.forEach((component) => {
      if (
        component.props.info.ID === card.props.info.ID &&
        component.props.isClicked.value == false
      ) {
        winCount++;
        component.props.isClicked.value = true;
      }

      cardsToLoad.push(component);
    });

    if (checkWin()) {
      props.levelWon();
      resetCardLoader();
    } else {
      reShuffleCards();
    }
  }

  function reShuffleCards() {
    setCalledCards(shuffleCards(cardsToLoad));
  }

  function checkWin() {
    if (winCount == numToLoad) {
      return true;
    }
  }

  function updateGridCols() {
    let numOfCols;

    if (numToLoad <= 3) {
      numOfCols = 3;
    } else {
      numOfCols = Math.round(numToLoad / 2);
    }
    document.querySelector(":root").style.setProperty("--numOfCols", numOfCols);
  }

  function resetCardLoader() {
    loadLevel = props.getLevel();
    stage = props.getCurrStage();
    cards = loadLevelSelector();
    numToLoad = cards.length;
    cardsToLoad = [];
    winCount = 0;

    setCalledCards(loadCards());
  }

  return <div className="cardLoader">{calledCards}</div>;
}

export default CardLoader;
