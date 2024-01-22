import React, { useState, useEffect } from "react";

import styles from "./rock-paper-scissors-container.module.scss";

const mapper = {
  rock: "🪨",
  paper: "📄",
  scissors: "✂",
};

export default function RockPaperScissorsContainer(props) {
  const [result, setResult] = useState("");
  const [computerSelect, setComputerSelect] = useState("");
  const [userSelect, setUserSelect] = useState("");
  const [isUserSelect, setIsUserSelect] = useState(false);

  useEffect(() => {
    randomSelectComputer();
  }, []);

  const handleSelect = (type) => {
    if (isUserSelect) return;
    setIsUserSelect(true);
    setUserSelect(type);

    if (type == "rock") {
      if (computerSelect == "paper") {
        setResult("You Lose");
      }
      if (computerSelect == "rock") {
        setResult("Draw");
      }
      if (computerSelect == "scissors") {
        setResult("You Win");
      }
    }
    if (type == "paper") {
      if (computerSelect == "rock") {
        setResult("You Win");
      }
      if (computerSelect == "paper") {
        setResult("Draw");
      }
      if (computerSelect == "scissors") {
        setResult("You Lose");
      }
    }
    if (type == "scissors") {
      if (computerSelect == "rock") {
        setResult("You Lose");
      }
      if (computerSelect == "paper") {
        setResult("You Win");
      }
      if (computerSelect == "scissors") {
        setResult("Draw");
      }
    }
  };

  const randomSelectComputer = () => {
    const ranIndex = parseInt(Math.random() * 3);

    const myKey = Object.keys(mapper)[ranIndex];
    setComputerSelect(myKey);
  };

  const handleNextRound = (params) => {
    setIsUserSelect(false);
    setUserSelect("");
    setResult("");
    randomSelectComputer();
  };

  return (
    <main className={styles.rock_paper_scissors_container_container}>
      <div className={styles.main_box}>
        <section className={styles.user_section}>
          <span
            style={{ background: userSelect === "rock" ? "lightblue" : "" }}
            onClick={() => handleSelect("rock")}
          >
            🪨
          </span>
          <span
            style={{ background: userSelect === "paper" ? "lightblue" : "" }}
            onClick={() => handleSelect("paper")}
          >
            📄
          </span>
          <span
            style={{ background: userSelect === "scissors" ? "lightblue" : "" }}
            onClick={() => handleSelect("scissors")}
          >
            ✂
          </span>
        </section>
        <section className={styles.computer_Section}>
          {!isUserSelect && <span>❓</span>}
          {isUserSelect && <span>{mapper[computerSelect]}</span>}
        </section>
      </div>
      <section className={styles.result_section}>Result : {result}</section>
      <button disabled={!isUserSelect} onClick={handleNextRound}>
        Next Round
      </button>
    </main>
  );
}
