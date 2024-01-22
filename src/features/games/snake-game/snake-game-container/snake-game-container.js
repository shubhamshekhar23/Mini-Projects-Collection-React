import React, { useState, useEffect } from "react";

import styles from "./snake-game-container.module.scss";

export default function SnakeGameContainer(props) {
  const [snake, setSnake] = useState([]);
  const [gameBoard, setGameBoard] = useState([]);
  const [food, setFood] = useState([]);
  const [moveDirection, setMoveDirection] = useState("right");

  const [ROWS, COLS] = [50, 50];

  /* set snake body and food */
  useEffect(() => {
    setSnake([
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
    ]);
    setFood([25, 25]);
  }, []);

  /* setgameboard */
  useEffect(() => {
    let rows = new Array(ROWS).fill(null);
    let arr = rows.map((item) => new Array(COLS).fill(null));
    setGameBoard(arr);
  }, []);

  useEffect(() => {
    const gameInterval = setInterval(() => {
      updateSnakeBody();
    }, 50);

    return () => {
      clearInterval(gameInterval);
    };
  }, [snake]);

  const handleKeyMove = (event) => {
    if (event.key === "ArrowLeft") {
      moveDirection !== "right" && setMoveDirection("left");
    }
    if (event.key === "ArrowRight") {
      moveDirection !== "left" && setMoveDirection("right");
    }
    if (event.key === "ArrowUp") {
      moveDirection !== "down" && setMoveDirection("up");
    }
    if (event.key === "ArrowDown") {
      moveDirection !== "up" && setMoveDirection("down");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyMove);

    return () => {
      window.removeEventListener("keydown", handleKeyMove);
    };
  }, [moveDirection]);

  useEffect(() => {
    if (!snake[0]) return;
    updateSnakeBody();
  }, [moveDirection]);

  const updateSnakeBody = () => {
    let newSnake = [...snake];
    let item = newSnake.shift();

    let pos = [...newSnake[newSnake.length - 1]];

    if (moveDirection === "right") {
      pos[1]++;
    }
    if (moveDirection === "left") {
      pos[1]--;
    }
    if (moveDirection === "up") {
      pos[0]--;
    }
    if (moveDirection === "down") {
      pos[0]++;
    }

    if (pos[0] === ROWS) pos[0] = 0;
    if (pos[0] === -1) pos[0] = ROWS - 1;
    if (pos[1] === COLS) pos[1] = 0;
    if (pos[1] === -1) pos[1] = COLS - 1;

    if (pos[0] === food[0] && pos[1] === food[1]) {
      newSnake.unshift(item);
      showRandomFood();
    }
    newSnake.push(pos);
    setSnake(newSnake);
  };

  const showRandomFood = () => {
    let ranRow = parseInt(Math.random() * ROWS);
    let ranCol = parseInt(Math.random() * COLS);
    setFood([ranRow, ranCol]);
  };

  const colElements = () => {
    return gameBoard.map((item, index) => {
      return (
        <div className={styles.row_item} key={"row-" + index}>
          {rowElements(item, index)}
        </div>
      );
    });
  };

  const rowElements = (arr, rowIndex) => {
    return arr.map((item, index) => {
      return (
        <div
          className={calcStyles.boxItem(rowIndex, index)}
          key={rowIndex + "-" + index}
        ></div>
      );
    });
  };

  const calcStyles = {
    boxItem: (row, col) => {
      let arr = [styles.box_item];

      /* check for snake body */
      if (
        snake.findIndex((item) => item[0] === row && item[1] === col) !== -1
      ) {
        arr.push(styles.snake_body);
      }

      /* check for food */
      if (food[0] === row && food[1] === col) {
        arr.push(styles.food_body);
      }
      return arr.join(" ");
    },
  };

  return (
    <main className={styles.snake_game_container_container}>
      {colElements()}
    </main>
  );
}
