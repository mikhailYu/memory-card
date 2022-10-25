import { useEffect, useState } from "react";

function CardCreate(props) {
  // toggle dev tool here
  let devTools = false;
  const [redBg, setRedBg] = useState(null);
  const [isRed, setIsRed] = useState(false);

  useEffect(() => {
    if (isRed == true) {
      setRedBg({ backgroundColor: "red" });
    }
  }, [isRed]);

  function onClickHandler() {
    if (props.isClicked.value == true) {
      props.gameOver();
    } else {
      props.addScore();
    }
    if (devTools == true) {
      setIsRed(true);
    }
    props.clicked(props.info.ID);
  }
  return (
    <div className="cardBorder" style={redBg} onClick={onClickHandler}>
      <img
        className="cardImage"
        src={require("../../images/sprites/" + props.info.pkmnName + ".png")}
      ></img>
    </div>
  );
}

export default CardCreate;
