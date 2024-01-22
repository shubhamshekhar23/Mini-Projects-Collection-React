import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/home";
import Accordion from "../features/shared-elements/accordion/accordion";
import AnalogClock from "../features/time-apps/analog-clock/analog-clock";
import ContactForm from "../features/form-apps/contact-form/contact-form";
import DigitalClock from "../features/time-apps/digital-clock/digital-clock";
import FlightBooker from "../features/form-apps/flight-booker/flight-booker";
import FolderFileTree from "../features/advanced-logic-apps/folder-file-tree/folder-file-tree";
import GenerateTable from "../features/advanced-logic-apps/generate-table/generate-table";
import GridLights from "../features/css-usage/grid-lights/grid-lights";
import JobBoard from "../features/api-usage-apps/job-board/job-board";
import LikeButton from "../features/api-usage-apps/like-button/like-button";
import MortgageCalculator from "../features/intermediate-apps/mortgage-calculator/mortgage-calculator";
import SignUpForm from "../features/form-apps/sign-up-form/sign-up-form";
import StarRating from "../features/css-usage/star-rating/star-rating";
import StopWatch from "../features/time-apps/stop-watch/stop-watch";
import Tabs from "../features/shared-elements/tabs/tabs";
import TemperatureConverter from "../features/intermediate-apps/temperature-converter/temperature-converter";
import ToDoList from "../features/intermediate-apps/to-do-list/to-do-list";
import TrafficLight from "../features/css-usage/traffic-light/traffic-light";
import TransferList from "../features/advanced-logic-apps/transfer-list/transfer-list";
import Tweet from "../features/css-usage/tweet/tweet";
import UndoableCounter from "../features/advanced-logic-apps/undoable-counter/undoable-counter";
import ZPlayground from "../pages/z-playground/z-playground";
import SkeletonLoader from "../features/shared-elements/skeleton-loader/skeleton-loader";
import ProgressBarRelated from "../features/shared-elements/progress-bar-related/progress-bar-related";
import ProgressBars from "../features/shared-elements/progress-bar-related/progress-bars/progress-bars";
import ProgressBars2 from "../features/shared-elements/progress-bar-related/progress-bars-2/progress-bars-2";
import ProgressBars3 from "../features/shared-elements/progress-bar-related/progress-bars-3/progress-bars-3";
import ProgressBar from "../features/shared-elements/progress-bar-related/progress-bar/progress-bar";
import SpinningLoader from "../features/shared-elements/spinning-loader/spinning-loader";
import SelectDropdown from "../features/shared-elements/select-dropdown/select-dropdown";
import MemoryCardGame from "../features/games/memory-card-game/memory-card-game";
import TicTacToeGame from "../features/games/tic-tac-toe-game/tic-tac-toe-game";
import WhackMoleGame from "../features/games/whack-mole-game/whack-mole-game";
import AutocompleteChips from "../features/shared-elements/autocomplete-chips/autocomplete-chips";
import OtpInput from "../features/form-apps/otp-input/otp-input";
import SnakeGame from "../features/games/snake-game/snake-game";
import Drawer from "../features/shared-elements/drawer/drawer";
import RockPaperScissors from "../features/games/rock-paper-scissors/rock-paper-scissors";
import FileUploader from "../features/form-apps/file-uploader/file-uploader";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/z-playground", element: <ZPlayground /> },

  /* Basic UI elements */
  { path: "/accordion", element: <Accordion /> },
  { path: "/tabs", element: <Tabs /> },
  { path: "/select-dropdown", element: <SelectDropdown /> },
  { path: "/autocomplete-chips", element: <AutocompleteChips /> },
  { path: "/skeleton-loader", element: <SkeletonLoader /> },
  { path: "/spinning-loader", element: <SpinningLoader /> },
  { path: "/drawer", element: <Drawer /> },
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

  /* Forms */
  { path: "/contact-form", element: <ContactForm /> },
  { path: "/sign-up-form", element: <SignUpForm /> },
  { path: "/flight-booker", element: <FlightBooker /> },
  { path: "/otp-input", element: <OtpInput /> },
  { path: "/file-uploader", element: <FileUploader /> },

  /* Games */
  { path: "/memory-card-game", element: <MemoryCardGame /> },
  { path: "/tic-tac-toe-game", element: <TicTacToeGame /> },
  { path: "/whack-mole-game", element: <WhackMoleGame /> },
  { path: "/snake-game", element: <SnakeGame /> },
  { path: "/rock-paper-scissors", element: <RockPaperScissors /> },
]);

export default router;
