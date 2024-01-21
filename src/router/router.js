import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/home";
import Accordion from "../pages/accordion/accordion";
import AnalogClock from "../pages/analog-clock/analog-clock";
import ContactForm from "../pages/contact-form/contact-form";
import DigitalClock from "../pages/digital-clock/digital-clock";
import FlightBooker from "../pages/flight-booker/flight-booker";
import FolderFileTree from "../pages/folder-file-tree/folder-file-tree";
import GenerateTable from "../pages/generate-table/generate-table";
import GridLights from "../pages/grid-lights/grid-lights";
import JobBoard from "../pages/job-board/job-board";
import LikeButton from "../pages/like-button/like-button";
import MemoryCardGame from "../pages/memory-card-game/memory-card-game";
import MortgageCalculator from "../pages/mortgage-calculator/mortgage-calculator";
import SignUpForm from "../pages/sign-up-form/sign-up-form";
import StarRating from "../pages/star-rating/star-rating";
import StopWatch from "../pages/stop-watch/stop-watch";
import Tabs from "../pages/tabs/tabs";
import TemperatureConverter from "../pages/temperature-converter/temperature-converter";
import TicTacToeGame from "../pages/tic-tac-toe-game/tic-tac-toe-game";
import ToDoList from "../pages/to-do-list/to-do-list";
import TrafficLight from "../pages/traffic-light/traffic-light";
import TransferList from "../pages/transfer-list/transfer-list";
import Tweet from "../pages/tweet/tweet";
import UndoableCounter from "../pages/undoable-counter/undoable-counter";
import WhackMoleGame from "../pages/whack-mole-game/whack-mole-game";
import ZPlayground from "../pages/z-playground/z-playground";
import SkeletonLoader from "../pages/skeleton-loader/skeleton-loader";
import ProgressBarRelated from "../pages/progress-bar-related/progress-bar-related";
import ProgressBars from "../pages/progress-bar-related/progress-bars/progress-bars";
import ProgressBars2 from "../pages/progress-bar-related/progress-bars-2/progress-bars-2";
import ProgressBars3 from "../pages/progress-bar-related/progress-bars-3/progress-bars-3";
import ProgressBar from "../pages/progress-bar-related/progress-bar/progress-bar";
import SpinningLoader from "../pages/spinning-loader/spinning-loader";
import SelectDropdown from "../pages/select-dropdown/select-dropdown";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/z-playground", element: <ZPlayground /> },

  /* API Usage */
  { path: "/job-board", element: <JobBoard /> },
  { path: "/like-button", element: <LikeButton /> },

  /* CSS Usage */
  { path: "/tweet", element: <Tweet /> },
  { path: "/grid-lights", element: <GridLights /> },
  { path: "/traffic-light", element: <TrafficLight /> },
  { path: "/star-rating", element: <StarRating /> },

  /* Intermediate Apps */
  { path: "/to-do-list", element: <ToDoList /> },
  { path: "/temperature-converter", element: <TemperatureConverter /> },
  { path: "/mortgage-calculator", element: <MortgageCalculator /> },

  /* Advanced Logic Apps */
  { path: "/folder-file-tree", element: <FolderFileTree /> },
  { path: "/transfer-list", element: <TransferList /> },
  { path: "/undoable-counter", element: <UndoableCounter /> },
  { path: "/generate-table", element: <GenerateTable /> },

  /* Time Apps */
  { path: "/digital-clock", element: <DigitalClock /> },
  { path: "/stop-watch", element: <StopWatch /> },
  { path: "/analog-clock", element: <AnalogClock /> },

  /* Basic UI elements */
  { path: "/accordion", element: <Accordion /> },
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
  { path: "/tabs", element: <Tabs /> },
  { path: "/select-dropdown", element: <SelectDropdown /> },
  { path: "/skeleton-loader", element: <SkeletonLoader /> },
  { path: "/spinning-loader", element: <SpinningLoader /> },

  /* Forms */
  { path: "/contact-form", element: <ContactForm /> },
  { path: "/sign-up-form", element: <SignUpForm /> },
  { path: "/flight-booker", element: <FlightBooker /> },

  /* Games */
  { path: "/memory-card-game", element: <MemoryCardGame /> },
  { path: "/tic-tac-toe-game", element: <TicTacToeGame /> },
  { path: "/whack-mole-game", element: <WhackMoleGame /> },
]);

export default router;
