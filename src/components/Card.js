import React from "react";

export default function Card(props) {
  const {
    extraClass = "span2",
    positionTop = "0",
    positionLeft = "0",
    animationDelay = "1",
    img = "https://www.oxfordlearning.com/wp-content/uploads/2009/05/tips-for-easier-studying-860x420.jpg"
  } = props;

  const randomNumber = (bottom = 1, top = 10) =>
    Math.floor(Math.random() * top + bottom);

  //   let cardHeight = randomNumber(4, 6) + "rem";
  //   let cardWidth = randomNumber(6, 10) + "rem";
  let cardMargin =
    randomNumber(50, 100) +
    "px " +
    randomNumber(50, 100) +
    "px " +
    randomNumber(50, 100) +
    "px " +
    randomNumber(50, 100) +
    "px";
  let cardImg = "url(" + img + ")";
  let cardAnimationDelay = animationDelay + "s";
  let topSpace = positionTop + "px";
  let leftSpace = positionLeft + "px";

  const cardStyling = {
    backgroundImage: cardImg,
    // backgroundColor: "red",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    margin: cardMargin,
    animationDelay: cardAnimationDelay,
    top: topSpace,
    left: leftSpace
    // // margin: cardMargin,
    // margin: "0 1rem 0 1rem",
    // flex: "1 0 auto",
    // height: cardHeight,
    // width: "200px"
    // position: "relative"
  };

  return (
    <div
      id={props.cardId}
      className={"card-style " + extraClass}
      style={cardStyling}
    >
      <h4 style={{ animationDelay: cardAnimationDelay }}>
        Card title goes heere
      </h4>
    </div>
  );
}
