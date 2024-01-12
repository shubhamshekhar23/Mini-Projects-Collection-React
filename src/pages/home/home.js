import { Link } from "react-router-dom";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h4>Api Usage apps</h4>
      <section className={styles.project_container}>
        <a href="/job-board">job-board</a>
        <a href="/like-button">like-button</a>
        <a href="/paginator" className={styles.yet_implement}>
          paginator
        </a>
      </section>

      <h4>Css usage</h4>
      <section className={styles.project_container}>
        <a href="/tweet">tweet</a>
        <a href="/grid-lights">grid-lights</a>
        <a href="/traffic-light">traffic-light</a>
        <a href="/star-rating">star-rating</a>
        <a href="/page-theme" className={styles.yet_implement}>
          page theme switch
        </a>
      </section>

      <h4>Intermediate Apps</h4>
      <section className={styles.project_container}>
        <a href="/to-do-list">to-do-list</a>
        <a href="/temperature-converter">temperature-converter</a>
        <a href="/mortgage-calculator">mortgage-calculator</a>
        <a className={styles.yet_implement}>Telephone-formatter</a>
        <a className={styles.yet_implement}>Password-Strength</a>
      </section>

      <h4>Advanced Logic apps</h4>
      <section className={styles.project_container}>
        <a href="/folder-file-tree">folder-file-tree</a>
        <a href="/transfer-list">transfer-list</a>
        <a href="/undoable-counter">undoable-counter</a>
        <a href="/generate-table">generate-table</a>
        <a className={styles.yet_implement}>Comment-Box</a>
        <a className={styles.yet_implement}>Basic-Calculator</a>
        <a href="/typehead" className={styles.yet_implement}>
          Google like typehead
        </a>
        <a className={styles.yet_implement}>Calendar</a>
        <a href="/excel" className={styles.yet_implement}>
          Microsoft like excel spreadsheet
        </a>
      </section>

      <h4>Time apps</h4>
      <section className={styles.project_container}>
        <a href="/digital-clock">digital-clock</a>
        <a href="/stop-watch">stop-watch</a>
        <a href="/analog-clock">analog-clock</a>
        <a className={styles.yet_implement}>Pomodoro</a>
      </section>

      <h4>Basic UI elements</h4>
      <section className={styles.project_container}>
        <a href="/accordion">accordion</a>
        <a href="/progress-bar-related">progress-bar-related</a>
        <a href="/tabs">tabs</a>
        <a href="/skeleton-loader">Skeleton loader</a>
        <a href="/spinning-loader">Spinning loader</a>
        <a className={styles.yet_implement}>Dialog-popup</a>
        <a className={styles.yet_implement}>Spinning-loader</a>
        <a>slider with step</a>
      </section>

      <h4>Forms</h4>
      <section className={styles.project_container}>
        <a href="/sign-up-form">sign-up-form</a>
        <a href="/contact-form">contact-form</a>
        <a href="/flight-booker">flight-booker</a>
        <a className={styles.yet_implement}>chips-input</a>
        <a className={styles.yet_implement}>OTP input</a>
        <a href="/file-uploader" className={styles.yet_implement}>
          File uploader
        </a>
        <a href="/dynamic-forms" className={styles.yet_implement}>
          Render dynamic forms using config
        </a>
      </section>

      <h4>Games :</h4>
      <section className={styles.project_container}>
        <a href="/whack-mole-game">whack-mole-game</a>
        <a href="/memory-card-game">memory-card-game</a>
        <a href="/tic-tac-toe-game">tic-tac-toe-game</a>
        <a className={styles.yet_implement}>Rock-paper-scissor</a>
        <a className={styles.yet_implement}>Snake Game</a>
      </section>

      {/* coming soon */}
      <h3>Coming soon below ....</h3>
      <section className={styles.project_container}>
        <a href="https://sadanandpai.github.io/frontend-mini-challenges/javascript/">
          Sample External Frontend collection
        </a>
        <a>Pixel-Art</a>
        <a>JSON-creator</a>
        <a>Carousel</a>
        <a>Sorting visusalizer</a>
        <a>Infinite-Scroll</a>
        <a>Nav-Bar</a>
      </section>
    </main>
  );
}
