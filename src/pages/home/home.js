import styles from "./home.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <a href="/">Home</a>
      <a href="/z-playground">z-playground</a>
      <a href="/memory-card-game">memory-card-game</a>
      <a href="/tic-tac-toe-game">tic-tac-toe-game</a>
      <a href="/accordion">accordion</a>
      <a href="/contact-form">contact-form</a>
      <a href="/flight-booker">flight-booker</a>
      <a href="/generate-table">generate-table</a>
      <a href="/progress-bar">progress-bar</a>
      <a href="/progress-bars">progress-bars</a>
      <a href="/progress-bars-2">progress-bars-2</a>
      <a href="/progress-bars-3">progress-bars-3</a>
      <a href="/temperature-converter">temperature-converter</a>
      <a href="/mortgage-calculator">mortgage-calculator</a>
      <a href="/tweet">tweet</a>
      <a href="/tabs">tabs</a>
      <a href="/analog-clock">analog-clock</a>
      <a href="/grid-lights">grid-lights</a>
      <a href="/stop-watch">stop-watch</a>
      <a href="/traffic-light">traffic-light</a>
      <a href="/star-rating">star-rating</a>
      <a href="/undoable-counter">undoable-counter</a>
      <a href="/digital-clock">digital-clock</a>
      <a href="/to-do-list">to-do-list</a>
      <a href="/whack-mole-game">whack-mole-game</a>
      <a href="/transfer-list">transfer-list</a>
      <a href="/job-board">job-board</a>
      <a href="/sign-up-form">sign-up-form</a>
      <a href="/like-button">like-button</a>
      <a href="/folder-file-tree">folder-file-tree</a>

      {/* coming soon */}
      <h3>Coming soon below ....</h3>
      <a href="/typehead">Google like typehead</a>
      <a href="/google-day-calendar">Google like day calendar</a>
      <a href="/excel">Microsoft like excel spreadsheet</a>
      <a href="/dynamic-forms">Render dynamic forms using config</a>
      <a href="/cart-page">Design cart page</a>
      <a href="/product-list-filters">Product listing page with filters</a>
      <a href="/list-stopwatch-creation">
        list of stopwatch creation and deletion
      </a>
    </main>
  );
}
