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
            <Link href="/memory-card-game">Memoru Card Game</Link>
          </li>
          <li>
            <Link href="/tic-tac-toe-game">Tic tac toe game</Link>
          </li>
          <li>
            <Link href="/accordion">Accordion</Link>
          </li>
          <li>
            <Link href="/contact-form">Contact Form</Link>
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
