import { useEffect, useState } from "react";
import "./styles/App.css";
import CardLoader from "./components/cards/cardLoader";
import Header from "./components/pageView/header";
import Footer from "./components/pageView/footer";
import PreGameScreen from "./components/pageView/gameStartScreen";
import GameOverScreen from "./components/pageView/gameOverScreen";
import setBestScore from "./components/levels/bestScore";
import levelStorage from "./components/levels/levels";

function App() {
  let level;
  let score = 0;
  let bestScore = 0;
  let finalLevel = levelStorage.length - 1;
  let health = 0;
  let isHealthLvCount = 0;

  const [mainSegment, setMainSegment] = useState(PreGameScreen());
  const [gameState, setGameState] = useState("preGame");
  const [displaysScore, setDisplayScore] = useState(0);
  const [displayLevel, setDisplayLevel] = useState(level);
  const [displayBestScore, setDisplayBestScore] = useState(0);
  const [displayHealth, setDisplayHealth] = useState(updateHealth());

  function resetStats() {
    // set level here man
    level = 1;
    health = 3;
    isHealthLvCount = 0;
  }

  function levelWon() {
    if (level == finalLevel) {
      addScoreLevelWin();
      gameWon();
    } else {
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
    bestScore = setBestScore(score);
    setDisplayBestScore(bestScore);
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
    setGameState("inGame");
  }

  function getScore() {
    return { score, bestScore };
  }

  function addScore() {
    score = score + Math.ceil(level / 3) * 5;

    setDisplayScore(score);
  }

  function addScoreLevelWin() {
    addScore();
    score = score + level * 10;
    setDisplayScore(score);
  }

  function hideStats() {
    document.querySelector(".scoreDiv").style.display = "none";
    document.querySelector(".levelDiv").style.display = "none";
    document.querySelector(".healthDiv").style.display = "none";
  }

  function showStats() {
    document.querySelector(".scoreDiv").style.display = "inline-block";
    document.querySelector(".levelDiv").style.display = "inline-block";
    document.querySelector(".healthDiv").style.display = "inline-block";
  }

  useEffect(() => {
    if (gameState == "preGame") {
      setMainSegment(<PreGameScreen startGame={startGame} />);
      hideStats();
    } else if (gameState == "inGame") {
      resetStats();

      setDisplayHealth(updateHealth());
      setDisplayLevel(level);
      setMainSegment(
        <CardLoader
          levelWon={levelWon}
          getLevel={getLevel}
          playerLost={playerLost}
          addScore={addScore}
        />
      );
      showStats();
    } else if (gameState == "gameOver") {
      hideStats();
      setMainSegment(
        <GameOverScreen
          retry={retry}
          getScore={getScore}
          displaysScore={displaysScore}
          displayBestScore={displayBestScore}
          isWon={false}
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
