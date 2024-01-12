import styles from "./home.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h4>Api Usage apps</h4>
      <section className={styles.project_container}>
        <a href="/job-board">job-board</a>
        <a href="/like-button">like-button</a>
      </section>

      <h4>Css usage</h4>
      <section className={styles.project_container}>
        <a href="/tweet">tweet</a>
        <a href="/grid-lights">grid-lights</a>
        <a href="/traffic-light">traffic-light</a>
        <a href="/star-rating">star-rating</a>
      </section>

      <h4>Intermediate Apps</h4>
      <section className={styles.project_container}>
        <a href="/to-do-list">to-do-list</a>
        <a href="/temperature-converter">temperature-converter</a>
        <a href="/mortgage-calculator">mortgage-calculator</a>
      </section>

      <h4>Advanced Logic apps</h4>
      <section className={styles.project_container}>
        <a href="/folder-file-tree">folder-file-tree</a>
        <a href="/transfer-list">transfer-list</a>
        <a href="/undoable-counter">undoable-counter</a>
        <a href="/generate-table">generate-table</a>
      </section>

      <h4>Time apps</h4>
      <section className={styles.project_container}>
        <a href="/digital-clock">digital-clock</a>
        <a href="/stop-watch">stop-watch</a>
        <a href="/analog-clock">analog-clock</a>
      </section>

      <h4>Basic UI elements</h4>
      <section className={styles.project_container}>
        <a href="/accordion">accordion</a>
        <a href="/progress-bar">progress-bar</a>
        <a href="/progress-bars">progress-bars</a>
        <a href="/progress-bars-2">progress-bars-2</a>
        <a href="/progress-bars-3">progress-bars-3</a>
        <a href="/tabs">tabs</a>
        <a href="/skeleton-loader">Skeleton loader</a>
      </section>

      <h4>Forms</h4>
      <section className={styles.project_container}>
        <a href="/sign-up-form">sign-up-form</a>
        <a href="/contact-form">contact-form</a>
        <a href="/flight-booker">flight-booker</a>
      </section>

      <h4>Games :</h4>
      <section className={styles.project_container}>
        <a href="/whack-mole-game">whack-mole-game</a>
        <a href="/memory-card-game">memory-card-game</a>
        <a href="/tic-tac-toe-game">tic-tac-toe-game</a>
      </section>

      {/* coming soon */}
      <h3>Coming soon below ....</h3>
      <section className={styles.project_container}>
        <a href="https://sadanandpai.github.io/frontend-mini-challenges/javascript/">
          Sample External Frontend collection
        </a>
        <a>File-uploader</a>
        <a>Dialog-popup</a>
        <a>Spinning-loader</a>
        <a>Telephone-formatter</a>
        <a>Rock-paper-scissor</a>
        <a>Password-Strength</a>
        <a>Pixel-Art</a>
        <a>JSon-creator</a>
        <a>Comment-Box</a>
        <a>Paginator</a>
        <a>Calendar</a>
        <a>Carousel</a>
        <a>Pomodoro</a>
        <a>Sorting visusalizer</a>
        <a>OTP input</a>
        <a>BAsic-calucator</a>
        <a>Infinite-scroll</a>
        <a>chips-input</a>
        <a>nav-bar</a>
        <a>slider with step</a>

        <a href="/typehead">Google like typehead</a>
        <a href="/google-day-calendar">Google like day calendar</a>
        <a href="/excel">Microsoft like excel spreadsheet</a>
        <a href="/dynamic-forms">Render dynamic forms using config</a>
        <a href="/cart-page">Design cart page</a>
        <a href="/product-list-filters">Product listing page with filters</a>
        <a href="/list-stopwatch-creation">
          list of stopwatch creation and deletion
        </a>
      </section>
    </main>
  );
}
