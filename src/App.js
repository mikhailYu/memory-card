import { useEffect, useState } from "react";
import "./styles/App.css";
import CardLoader from "./components/cards/cardLoader";
import Header from "./components/pageView/header";
import Footer from "./components/pageView/footer";
import PreGameScreen from "./components/pageView/gameStartScreen";
import GameOverScreen from "./components/pageView/gameOverScreen";
import setBestScore from "./components/levels/bestScore";
import levelStorage from "./components/levels/levels";
import {
  levelStorageBonus1,
  levelStorageBonus2,
} from "./components/levels/levels-bonus";

function App() {
  let level;
  let score = 0;
  let bestScore = 0;
  let health = 0;
  let isHealthLvCount = 0;
  let mainLvs = levelStorage.length - 1;
  let bonus1Lvs = levelStorageBonus1.length - 1;
  let bonus2Lvs = levelStorageBonus2.length - 1;

  const [mainSegment, setMainSegment] = useState(PreGameScreen());
  const [gameState, setGameState] = useState("preGame");
  const [displaysScore, setDisplayScore] = useState(0);
  const [displayLevel, setDisplayLevel] = useState(level);
  const [displayBestScore, setDisplayBestScore] = useState(0);
  const [displayHealth, setDisplayHealth] = useState(updateHealth());
  const [bonus1, setBonus1] = useState(false);
  const [bonus2, setBonus2] = useState(false);
  const [currStage, setCurrStage] = useState("main");
  const [finalLevel, setFinalLevel] = useState(mainLvs);

  function resetStats(isFullHealth) {
    // set level here man
    level = 1;
    isHealthLvCount = 0;
    score = 0;

    if (isFullHealth) {
      health = 5;
    } else {
      health = 3;
    }
  }

  function levelWon() {
    if (level == finalLevel) {
      addScoreLevelWin();

      gameWon();
    } else {
      console.log(finalLevel);
      level++;
      isHealthLvCount++;
      setDisplayLevel(level);
      addScoreLevelWin();
      if (isHealthLvCount == 3) {
        isHealthLvCount = 0;
        addHealth();
        console.log(level % 3);
      }
    }
  }

  function getLevel() {
    return level;
  }

  function addHealth() {
    if (health >= 5) {
      score += level * 10;
    } else {
      health++;
      setDisplayHealth(updateHealth());
    }
  }

  function updateHealth() {
    let redHeart = "❤️";
    let emptyHeart = "🖤";
    let heartArr = [];
    let remainingHearts = 5 - health;

    for (let i = 0; i < health; i++) {
      heartArr.push(redHeart);
    }

    for (let i = 0; i < remainingHearts; i++) {
      heartArr.push(emptyHeart);
    }

    return <div className="heartIcons">{heartArr}</div>;
  }

  function gameWon() {
    score += health * 1000;
    setDisplayScore(score);

    bestScore = setBestScore(score);
    setDisplayBestScore(bestScore);
    checkBonusUnlock();
    setGameState("gameWon");
  }

  function playerLost() {
    if (health == 1) {
      bestScore = setBestScore(score);
      setDisplayBestScore(bestScore);

      setGameState("gameOver");
    } else {
      health--;
      setDisplayHealth(updateHealth());
    }
  }

  function startGame() {
    setGameState("inGame");
  }

  function retry() {
    score = 0;
    setDisplayScore(score);
    setCurrStage("main");
    setFinalLevel(mainLvs);
    setGameState("inGame");
  }

  function getScore() {
    return { score, bestScore };
  }

  function addScore() {
    score = score + Math.ceil(level / 3) * 5;

    checkBonusUnlock();
    setDisplayScore(score);
  }

  function checkBonusUnlock() {
    if (score > 10000) {
      setBonus1(true);
    }

    if (score > 20000) {
      setBonus2(true);
    }
  }

  function selectBonus(bonusStage) {
    setGameState("inGame");
    if (bonusStage == "bonus1") {
      setFinalLevel(bonus1Lvs);
    } else {
      setFinalLevel(bonus2Lvs);
    }

    setCurrStage(bonusStage);
  }

  function addScoreLevelWin() {
    addScore();
    score = score + level * 10;
    setDisplayScore(score);
  }

  function checkBonusUnlock1() {
    checkBonusUnlock();
    return bonus1;
  }

  function checkBonusUnlock2() {
    checkBonusUnlock();
    return bonus2;
  }

  function getCurrStage() {
    return currStage;
  }

  function hideStats() {
    document.querySelector(".scoreDiv").style.display = "none";
    document.querySelector(".levelDiv").style.display = "none";
    document.querySelector(".healthDiv").style.display = "none";
  }

  function showStats() {
    document.querySelector(".scoreDiv").style.display = "inline-block";
    showStatsLvHealth();
  }

  function showStatsLvHealth() {
    document.querySelector(".levelDiv").style.display = "inline-block";
    document.querySelector(".healthDiv").style.display = "inline-block";
  }

  useEffect(() => {
    if (gameState == "preGame") {
      setMainSegment(<PreGameScreen startGame={startGame} />);
      hideStats();
    } else if (gameState == "inGame" && currStage == "main") {
      resetStats(false);

      setDisplayHealth(updateHealth());
      setDisplayLevel(level);
      setMainSegment(
        <CardLoader
          levelWon={levelWon}
          getLevel={getLevel}
          playerLost={playerLost}
          addScore={addScore}
          getCurrStage={getCurrStage}
        />
      );
      showStats();
    } else if (
      gameState == "inGame" &&
      (currStage == "bonus1" || currStage == "bonus2")
    ) {
      resetStats(true);
      setDisplayHealth(updateHealth());
      setDisplayLevel(level);
      setMainSegment(
        <CardLoader
          levelWon={levelWon}
          getLevel={getLevel}
          playerLost={playerLost}
          addScore={addScore}
          getCurrStage={getCurrStage}
        />
      );
      showStatsLvHealth();
    } else if (gameState == "gameOver") {
      hideStats();
      setMainSegment(
        <GameOverScreen
          retry={retry}
          getScore={getScore}
          displaysScore={displaysScore}
          displayBestScore={displayBestScore}
          isWon={false}
          bonus1={checkBonusUnlock1}
          bonus2={checkBonusUnlock2}
          selectBonus={selectBonus}
          getCurrStage={getCurrStage}
        />
      );
    } else if (gameState == "gameWon") {
      hideStats();
      setMainSegment(
        <GameOverScreen
          retry={retry}
          getScore={getScore}
          displaysScore={displaysScore}
          displayBestScore={displayBestScore}
          isWon={true}
          bonus1={checkBonusUnlock1}
          bonus2={checkBonusUnlock2}
          selectBonus={selectBonus}
          getCurrStage={getCurrStage}
        />
      );
    }
  }, [gameState]);

  return (
    <div>
      <Header />
      <div id="body">
        <div className="statsCont">
          <div className="scoreDiv">Score:{displaysScore}</div>
          <div className="levelDiv">Level:{displayLevel}</div>
          <div className="healthDiv">{displayHealth}</div>
        </div>
        <div id="mainGameCont">{mainSegment}</div>
        <div className="bottomPadding"></div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
