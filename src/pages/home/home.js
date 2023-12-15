import styles from "./home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/memory-card-game">memory-card-game</Link>
          </li>
          <li>
            <Link href="/tic-tac-toe-game">tic-tac-toe-game</Link>
          </li>
          <li>
            <Link href="/accordion">accordion</Link>
          </li>
          <li>
            <Link href="/contact-form">contact-form</Link>
          </li>
          <li>
            <Link href="/flight-booker">flight-booker</Link>
          </li>
          <li>
            <Link href="/generate-table">generate-table</Link>
          </li>
          <li>
            <Link href="/progress-bar">progress-bar</Link>
          </li>
          <li>
            <Link href="/progress-bars">progress-bars</Link>
          </li>
          <li>
            <Link href="/progress-bars-2">progress-bars-2</Link>
          </li>
          <li>
            <Link href="/progress-bars-3">progress-bars-3</Link>
          </li>
          <li>
            <Link href="/temperature-converter">temperature-converter</Link>
          </li>
          <li>
            <Link href="/mortgage-calculator">mortgage-calculator</Link>
          </li>
          <li>
            <Link href="/tweet">tweet</Link>
          </li>
          <li>
            <Link href="/tabs">tabs</Link>
          </li>
          <li>
            <Link href="/analog-clock">analog-clock</Link>
          </li>
          <li>
            <Link href="/grid-lights">grid-lights</Link>
          </li>
          <li>
            <Link href="/stop-watch">stop-watch</Link>
          </li>
          <li>
            <Link href="/traffic-light">traffic-light</Link>
          </li>
          <li>
            <Link href="/star-rating">star-rating</Link>
          </li>
          <li>
            <Link href="/undoable-counter">undoable-counter</Link>
          </li>
          <li>
            <Link href="/digital-clock">digital-clock</Link>
          </li>
          <li>
            <Link href="/to-do-list">to-do-list</Link>
          </li>

          {/* coming soon */}
          <h3>Coming soon below ....</h3>
          <li>
            <Link href="/typehead">Google like typehead</Link>
          </li>
          <li>
            <Link href="/google-day-calendar">Google like day calendar</Link>
          </li>
          <li>
            <Link href="/excel">Microsoft like excel spreadsheet</Link>
          </li>
          <li>
            <Link href="/dynamic-forms">Render dynamic forms using config</Link>
          </li>
          <li>
            <Link href="/progress-bar">Progress bar</Link>
          </li>
          <li>
            <Link href="/start-rating-widget">Star rating widget</Link>
          </li>
          <li>
            <Link href="/twitter-post-textarea">
              Twitter post like textarea
            </Link>
          </li>
          <li>
            <Link href="/todo-application">Todo application</Link>
          </li>
          <li>
            <Link href="/cart-page">Design cart page</Link>
          </li>
          <li>
            <Link href="/product-list-filters">
              Product listing page with filters
            </Link>
          </li>

          <li>
            <Link href="/list-stopwatch-creation">
              list of stopwatch creation and deletion
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
