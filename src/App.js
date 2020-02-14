import React from "react";
import Card from "./components/Card";
import "./App.scss";

function App() {
  let cardsArray = [];
  let timesThroughLoop = 0;
  let iterator = 1;
  let posTop = 0;
  let posLeft = 0;
  let horizontalMultiplier = 0;
  let animationVariant = 1;
  let aniDelay = 0;

  for (let i = 0; i < 30; i++) {
    timesThroughLoop += 1;
    aniDelay = Math.random() * 10 + 1;
    animationVariant = Math.floor(Math.random() * 3 + 1);
    if (iterator === 1) {
      iterator += 1;
      posTop = 30;
      posLeft = horizontalMultiplier + Math.floor(Math.random() * 20 + 10);
    } else if (iterator === 2) {
      iterator += 1;
      posTop += 250;
      posLeft = horizontalMultiplier - Math.floor(Math.random() * 40 + 10);
    } else if (iterator === 3) {
      iterator = 1;
      posTop += 270;
      posLeft = horizontalMultiplier + Math.floor(Math.random() * 50 + 10);
      horizontalMultiplier += 450;
    }
    console.log("animationis " + animationVariant);

    cardsArray.push(
      <Card
        positionTop={posTop}
        positionLeft={posLeft}
        key={timesThroughLoop}
        cardId={timesThroughLoop}
        extraClass={"card-animation-" + animationVariant}
        animationDelay={aniDelay}
      />
    );
  }

  // let lastTopPosition = 0;
  // let positionLeftCounter = 0;
  // for (var i = 0; i< 6; i++){
  //   cards.push(<Card
  //     extraClass="card-animation-1"
  //           {if (loopCounter === 1){
  //             let top = positionTopCounter + 500
  //           } else if (loopCounter === 2){
  //             let top = positionTopCounter +
  //           }}
  //           positionTop = {positionTopCounter + 500}
  //           positionLeft="50"
  //   />)
  // }
  return (
    <div className="App">
      <div className="wrapper">
        <div className="slider-container">
          {cardsArray}
          {/* <Card
            extraClass="card-animation-1"
            title="card title"
            positionTop="50"
            positionLeft="50"
          />
          <Card
            extraClass="card-animation-2 span3"
            positionTop="20"
            positionLeft="500"
          />
          <Card
            extraClass="card-animation-1 span4"
            positionTop="70"
            positionLeft="1000"
          />
          <Card
            extraClass="card-animation-2 span2"
            positionTop="50"
            positionLeft="1500"
          />
          <Card
            extraClass="card-animation-1 span5"
            positionTop="20"
            positionLeft="2000"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
