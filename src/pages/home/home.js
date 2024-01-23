import { Link } from "react-router-dom";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h4>Shared UI Elements</h4>
      <section className={styles.project_container}>
        <Link to="/Mini-Projects-Collection-React/accordion">accordion</Link>
        <Link to="/Mini-Projects-Collection-React/progress-bar-related">
          progress-bar-related
        </Link>
        <Link to="/Mini-Projects-Collection-React/tabs">tabs</Link>
        <Link to="/Mini-Projects-Collection-React/skeleton-loader">
          Skeleton loader
        </Link>
        <Link to="/Mini-Projects-Collection-React/spinning-loader">
          Spinning loader
        </Link>
        <Link to="/Mini-Projects-Collection-React/select-dropdown">
          Select dropdown
        </Link>
        <Link to="/Mini-Projects-Collection-React/autocomplete-chips">
          Autocomplete Chips
        </Link>
        <Link to="/Mini-Projects-Collection-React/drawer">Drawer</Link>
        <Link className={styles.yet_implement}>Dialog-popup</Link>
        <Link className={styles.yet_implement}>slider with step</Link>
      </section>

      <h4>Api Usage apps</h4>
      <section className={styles.project_container}>
        <Link to="/Mini-Projects-Collection-React/job-board">job-board</Link>
        <Link to="/Mini-Projects-Collection-React/like-button">
          like-button
        </Link>
        <Link
          to="/Mini-Projects-Collection-React/paginator"
          className={styles.yet_implement}
        >
          paginator
        </Link>
      </section>

      <h4>Css usage apps</h4>
      <section className={styles.project_container}>
        <Link to="/Mini-Projects-Collection-React/tweet">tweet</Link>
        <Link to="/Mini-Projects-Collection-React/grid-lights">
          grid-lights
        </Link>
        <Link to="/Mini-Projects-Collection-React/traffic-light">
          traffic-light
        </Link>
        <Link to="/Mini-Projects-Collection-React/star-rating">
          star-rating
        </Link>
        <Link
          to="/Mini-Projects-Collection-React/page-theme"
          className={styles.yet_implement}
        >
          page theme switch
        </Link>
      </section>

      <h4>Intermediate Apps</h4>
      <section className={styles.project_container}>
        <Link to="/Mini-Projects-Collection-React/to-do-list">to-do-list</Link>
        <Link to="/Mini-Projects-Collection-React/temperature-converter">
          temperature-converter
        </Link>
        <Link to="/Mini-Projects-Collection-React/mortgage-calculator">
          mortgage-calculator
        </Link>
        <Link className={styles.yet_implement}>Telephone-formatter</Link>
        <Link className={styles.yet_implement}>Password-Strength</Link>
      </section>

      <h4>Advanced Logic apps</h4>
      <section className={styles.project_container}>
        <Link to="/Mini-Projects-Collection-React/folder-file-tree">
          folder-file-tree
        </Link>
        <Link to="/Mini-Projects-Collection-React/transfer-list">
          transfer-list
        </Link>
        <Link to="/Mini-Projects-Collection-React/undoable-counter">
          undoable-counter
        </Link>
        <Link to="/Mini-Projects-Collection-React/generate-table">
          generate-table
        </Link>
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
        <Link to="/Mini-Projects-Collection-React/digital-clock">
          digital-clock
        </Link>
        <Link to="/Mini-Projects-Collection-React/stop-watch">stop-watch</Link>
        <Link to="/Mini-Projects-Collection-React/analog-clock">
          analog-clock
        </Link>
        <Link className={styles.yet_implement}>Pomodoro</Link>
      </section>

      <h4>Form Apps</h4>
      <section className={styles.project_container}>
        <Link to="/Mini-Projects-Collection-React/sign-up-form">
          sign-up-form
        </Link>
        <Link to="/Mini-Projects-Collection-React/contact-form">
          contact-form
        </Link>
        <Link to="/Mini-Projects-Collection-React/flight-booker">
          flight-booker
        </Link>
        <Link to="/Mini-Projects-Collection-React/otp-input">OTP input</Link>
        <Link to="/Mini-Projects-Collection-React/file-uploader">
          File uploader
        </Link>
        <Link
          to="/Mini-Projects-Collection-React/dynamic-forms"
          className={styles.yet_implement}
        >
          Render dynamic forms using config
        </Link>
      </section>

      <h4>Games :</h4>
      <section className={styles.project_container}>
        <Link to="/Mini-Projects-Collection-React/whack-mole-game">
          whack-mole-game
        </Link>
        <Link to="/Mini-Projects-Collection-React/memory-card-game">
          memory-card-game
        </Link>
        <Link to="/Mini-Projects-Collection-React/tic-tac-toe-game">
          tic-tac-toe-game
        </Link>
        <Link to="/Mini-Projects-Collection-React/snake-game">Snake Game</Link>
        <Link to="/Mini-Projects-Collection-React/rock-paper-scissors">
          Rock-paper-scissor
        </Link>
      </section>

      {/* coming soon */}
      {/* <h3>Coming soon below ....</h3> */}
      <section className={styles.project_container} style={{ display: "none" }}>
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
