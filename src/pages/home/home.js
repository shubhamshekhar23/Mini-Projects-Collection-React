import { Link } from "react-router-dom";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h4>Shared UI Elements</h4>
      <section className={styles.project_container}>
        <Link to="/accordion">accordion</Link>
        <Link to="/progress-bar-related">progress-bar-related</Link>
        <Link to="/tabs">tabs</Link>
        <Link to="/skeleton-loader">Skeleton loader</Link>
        <Link to="/spinning-loader">Spinning loader</Link>
        <Link to="/select-dropdown">Select dropdown</Link>
        <Link to="/autocomplete-chips">Autocomplete Chips</Link>
        <Link to="/drawer">Drawer</Link>
        <Link className={styles.yet_implement}>Dialog-popup</Link>
        <Link className={styles.yet_implement}>slider with step</Link>
      </section>

      <h4>Api Usage apps</h4>
      <section className={styles.project_container}>
        <Link to="/job-board">job-board</Link>
        <Link to="/like-button">like-button</Link>
        <Link to="/paginator" className={styles.yet_implement}>
          paginator
        </Link>
      </section>

      <h4>Css usage apps</h4>
      <section className={styles.project_container}>
        <Link to="/tweet">tweet</Link>
        <Link to="/grid-lights">grid-lights</Link>
        <Link to="/traffic-light">traffic-light</Link>
        <Link to="/star-rating">star-rating</Link>
        <Link to="/page-theme" className={styles.yet_implement}>
          page theme switch
        </Link>
      </section>

      <h4>Intermediate Apps</h4>
      <section className={styles.project_container}>
        <Link to="/to-do-list">to-do-list</Link>
        <Link to="/temperature-converter">temperature-converter</Link>
        <Link to="/mortgage-calculator">mortgage-calculator</Link>
        <Link className={styles.yet_implement}>Telephone-formatter</Link>
        <Link className={styles.yet_implement}>Password-Strength</Link>
      </section>

      <h4>Advanced Logic apps</h4>
      <section className={styles.project_container}>
        <Link to="/folder-file-tree">folder-file-tree</Link>
        <Link to="/transfer-list">transfer-list</Link>
        <Link to="/undoable-counter">undoable-counter</Link>
        <Link to="/generate-table">generate-table</Link>
        <Link className={styles.yet_implement}>Comment-Box</Link>
        <Link className={styles.yet_implement}>Basic-Calculator</Link>
        <Link to="/typehead" className={styles.yet_implement}>
          Google like typehead
        </Link>
        <Link className={styles.yet_implement}>Calendar</Link>
        <Link to="/excel" className={styles.yet_implement}>
          Microsoft like excel spreadsheet
        </Link>
      </section>

      <h4>Time apps</h4>
      <section className={styles.project_container}>
        <Link to="/digital-clock">digital-clock</Link>
        <Link to="/stop-watch">stop-watch</Link>
        <Link to="/analog-clock">analog-clock</Link>
        <Link className={styles.yet_implement}>Pomodoro</Link>
      </section>

      <h4>Form Apps</h4>
      <section className={styles.project_container}>
        <Link to="/sign-up-form">sign-up-form</Link>
        <Link to="/contact-form">contact-form</Link>
        <Link to="/flight-booker">flight-booker</Link>
        <Link to="/otp-input">OTP input</Link>
        <Link to="/file-uploader" className={styles.yet_implement}>
          File uploader
        </Link>
        <Link to="/dynamic-forms" className={styles.yet_implement}>
          Render dynamic forms using config
        </Link>
      </section>

      <h4>Games :</h4>
      <section className={styles.project_container}>
        <Link to="/whack-mole-game">whack-mole-game</Link>
        <Link to="/memory-card-game">memory-card-game</Link>
        <Link to="/tic-tac-toe-game">tic-tac-toe-game</Link>
        <Link to="/snake-game">Snake Game</Link>
        <Link to="/rock-paper-scissors">Rock-paper-scissor</Link>
      </section>

      {/* coming soon */}
      <h3>Coming soon below ....</h3>
      <section className={styles.project_container}>
        <Link to="https://sadanandpai.github.io/frontend-mini-challenges/javascript/">
          Sample External Frontend collection
        </Link>
        <Link className={styles.yet_implement}>Pixel-Art</Link>
        <Link className={styles.yet_implement}>JSON-creator</Link>
        <Link className={styles.yet_implement}>Carousel</Link>
        <Link className={styles.yet_implement}>Sorting visusalizer</Link>
        <Link className={styles.yet_implement}>Infinite-Scroll</Link>
        <Link className={styles.yet_implement}>Nav-Bar</Link>
      </section>
    </main>
  );
}
