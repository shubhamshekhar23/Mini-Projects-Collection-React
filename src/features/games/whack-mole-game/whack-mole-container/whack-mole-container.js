import React, { useState, useEffect, useRef } from "react";

import styles from "./whack-mole-container.module.scss";
import WhackMoleItem from "../whack-mole-item/whack-mole-item";

export default function WhackMoleContainer(props) {
  const [state, setState] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [isGameStart, setIsGameStart] = useState(false);

  const showHeadInterval = useRef();
  const gameInterval = useRef();

  useEffect(() => {
    setState(new Array(9).fill(false));
  }, []);

  useEffect(() => {
    if (timeLeft == 0) {
      clearInterval(showHeadInterval.current);
      clearInterval(gameInterval.current);
      setState(new Array(9).fill(false));
    }
  }, [timeLeft]);

  function startGame() {
    setIsGameStart(true);
    showHeadInterval.current = setInterval(() => {
      updateRandomTwoPlace();
    }, 2000);
    gameInterval.current = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
  }

  function updateRandomTwoPlace() {
    const [index1, index2] = getTwoRandom();

    const newState = [...new Array(9).fill(false)];
    newState[index1] = true;
    newState[index2] = true;

    setState(newState);
  }

  function getTwoRandom() {
    let p1 = getRandomNumber();
    let p2 = getRandomNumber();
    while (p2 === p1) {
      p2 = getRandomNumber();
    }
    return [p1, p2];
  }

  function getRandomNumber() {
    let ran = Math.random();
    ran = ran * 9;
    ran = parseInt(ran);
    return ran;
  }

  function handleHeadClick(index) {
    const newState = [...state];
    newState[index] = false;

    setState(newState);
    setScore(score + 1);
  }

  return (
    <main className={styles.whack_mole_container_container}>
      <div style={{ height: "100px" }}>
        {!isGameStart && <button onClick={startGame}>Start Game</button>}

        {isGameStart && (
          <div>
            <p>Score: {score}</p>
            <p>Time Left: {timeLeft}</p>
          </div>
        )}
      </div>

      <div className={styles.game_board}>
        {state.map((item, index) => {
          return (
            <WhackMoleItem
              key={index}
              show={item}
              index={index}
              onClick={handleHeadClick}
            />
          );
        })}
      </div>
    </main>
  );
}
