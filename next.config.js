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
    ];
  },
};

module.exports = nextConfig;
