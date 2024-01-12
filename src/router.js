import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import Accordion from "./pages/accordion/accordion";
import AnalogClock from "./pages/analog-clock/analog-clock";
import ContactForm from "./pages/contact-form/contact-form";
import DigitalClock from "./pages/digital-clock/digital-clock";
import FlightBooker from "./pages/flight-booker/flight-booker";
import FolderFileTree from "./pages/folder-file-tree/folder-file-tree";
import GenerateTable from "./pages/generate-table/generate-table";
import GridLights from "./pages/grid-lights/grid-lights";
import JobBoard from "./pages/job-board/job-board";
import LikeButton from "./pages/like-button/like-button";
import MemoryCardGame from "./pages/memory-card-game/memory-card-game";
import MortgageCalculator from "./pages/mortgage-calculator/mortgage-calculator";
// import ProgressBar from "./pages/progress-bar/progress-bar";
// import ProgressBars from "./pages/progress-bars/progress-bars";
// import ProgressBars2 from "./pages/progress-bars-2/progress-bars-2";
// import ProgressBars3 from "./pages/progress-bars-3/progress-bars-3";
import SignUpForm from "./pages/sign-up-form/sign-up-form";
import StarRating from "./pages/star-rating/star-rating";
import StopWatch from "./pages/stop-watch/stop-watch";
import Tabs from "./pages/tabs/tabs";
import TemperatureConverter from "./pages/temperature-converter/temperature-converter";
import TicTacToeGame from "./pages/tic-tac-toe-game/tic-tac-toe-game";
import ToDoList from "./pages/to-do-list/to-do-list";
import TrafficLight from "./pages/traffic-light/traffic-light";
import TransferList from "./pages/transfer-list/transfer-list";
import Tweet from "./pages/tweet/tweet";
import UndoableCounter from "./pages/undoable-counter/undoable-counter";
import WhackMoleGame from "./pages/whack-mole-game/whack-mole-game";
import ZPlayground from "./pages/z-playground/z-playground";
import SkeletonLoader from "./pages/skeleton-loader/skeleton-loader";
import ProgressBarRelated from "./pages/progress-bar-related/progress-bar-related";
import ProgressBars from "./pages/progress-bar-related/progress-bars/progress-bars";
import ProgressBars2 from "./pages/progress-bar-related/progress-bars-2/progress-bars-2";
import ProgressBars3 from "./pages/progress-bar-related/progress-bars-3/progress-bars-3";
import ProgressBar from "./pages/progress-bar-related/progress-bar/progress-bar";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/accordion", element: <Accordion /> },
  { path: "/analog-clock", element: <AnalogClock /> },
  { path: "/contact-form", element: <ContactForm /> },
  { path: "/digital-clock", element: <DigitalClock /> },
  { path: "/flight-booker", element: <FlightBooker /> },
  { path: "/folder-file-tree", element: <FolderFileTree /> },
  { path: "/generate-table", element: <GenerateTable /> },
  { path: "/grid-lights", element: <GridLights /> },
  { path: "/job-board", element: <JobBoard /> },
  { path: "/like-button", element: <LikeButton /> },
  { path: "/memory-card-game", element: <MemoryCardGame /> },
  { path: "/mortgage-calculator", element: <MortgageCalculator /> },
  { path: "/progress-bar", element: <ProgressBar /> },
  { path: "/progress-bars", element: <ProgressBars /> },
  { path: "/progress-bars-2", element: <ProgressBars2 /> },
  { path: "/progress-bars-3", element: <ProgressBars3 /> },
  { path: "/sign-up-form", element: <SignUpForm /> },
  { path: "/star-rating", element: <StarRating /> },
  { path: "/stop-watch", element: <StopWatch /> },
  { path: "/tabs", element: <Tabs /> },
  { path: "/temperature-converter", element: <TemperatureConverter /> },
  { path: "/tic-tac-toe-game", element: <TicTacToeGame /> },
  { path: "/to-do-list", element: <ToDoList /> },
  { path: "/traffic-light", element: <TrafficLight /> },
  { path: "/transfer-list", element: <TransferList /> },
  { path: "/tweet", element: <Tweet /> },
  { path: "/undoable-counter", element: <UndoableCounter /> },
  { path: "/whack-mole-game", element: <WhackMoleGame /> },
  { path: "/z-playground", element: <ZPlayground /> },
  { path: "/skeleton-loader", element: <SkeletonLoader /> },
  {
    path: "/progress-bar-related",
    children: [
      {
        index: true,
        element: <ProgressBarRelated />,
      },
      {
        path: "progress-bar",
        element: <ProgressBar />,
      },
      {
        path: "progress-bars",
        element: <ProgressBars />,
      },
      {
        path: "progress-bars-2",
        element: <ProgressBars2 />,
      },
      {
        path: "progress-bars-3",
        element: <ProgressBars3 />,
      },
    ],
  },
]);

export default router;
