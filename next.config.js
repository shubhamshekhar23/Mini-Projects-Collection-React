/** @type {import('next').NextConfig} */
const nextConfig = {
  /* enable custom routes */
  useFileSystemPublicRoutes: false,

  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home/home",
      },
      {
        source: "/memory-card-game",
        destination: "/memory-card-game/memory-card-game",
      },
      {
        source: "/tic-tac-toe-game",
        destination: "/tic-tac-toe-game/tic-tac-toe-game",
      },
      {
        source: "/accordion",
        destination: "/accordion/accordion",
      },
      {
        source: "/contact-form",
        destination: "/contact-form/contact-form",
      },
      {
        source: "/flight-booker",
        destination: "/flight-booker/flight-booker",
      },
      {
        source: "/generate-table",
        destination: "/generate-table/generate-table",
      },
      {
        source: "/progress-bar",
        destination: "/progress-bar/progress-bar",
      },
      {
        source: "/progress-bars",
        destination: "/progress-bars/progress-bars",
      },
      {
        source: "/progress-bars-2",
        destination: "/progress-bars-2/progress-bars-2",
      },
      {
        source: "/progress-bars-3",
        destination: "/progress-bars-3/progress-bars-3",
      },
      {
        source: "/temperature-converter",
        destination: "/temperature-converter/temperature-converter",
      },
      {
        source: "/mortgage-calculator",
        destination: "/mortgage-calculator/mortgage-calculator",
      },
      {
        source: "/tweet",
        destination: "/tweet/tweet",
      },
      {
        source: "/tabs",
        destination: "/tabs/tabs",
      },
      {
        source: "/analog-clock",
        destination: "/analog-clock/analog-clock",
      },
      {
        source: "/grid-lights",
        destination: "/grid-lights/grid-lights",
      },
      {
        source: "/stop-watch",
        destination: "/stop-watch/stop-watch",
      },
      {
        source: "/traffic-light",
        destination: "/traffic-light/traffic-light",
      },
      {
        source: "/star-rating",
        destination: "/star-rating/star-rating",
      },
      {
        source: "/undoable-counter",
        destination: "/undoable-counter/undoable-counter",
      },
      {
        source: "/digital-clock",
        destination: "/digital-clock/digital-clock",
      },
      {
        source: "/to-do-list",
        destination: "/to-do-list/to-do-list",
      },
      {
        source: "/whack-mole-game",
        destination: "/whack-mole-game/whack-mole-game",
      },
      {
        source: "/transfer-list",
        destination: "/transfer-list/transfer-list",
      },
      {
        source: "/job-board",
        destination: "/job-board/job-board",
      },
      {
        source: "/sign-up-form",
        destination: "/sign-up-form/sign-up-form",
      },
      {
        source: "/like-button",
        destination: "/like-button/like-button",
      },
    ];
  },
};

module.exports = nextConfig;
