import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
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
  {
    path: "/",
    element: <Navigate to="/Mini-Projects-Collection-React" replace />,
  },
  { path: "/Mini-Projects-Collection-React", element: <Home /> },
  {
    path: "/Mini-Projects-Collection-React/z-playground",
    element: <ZPlayground />,
  },

  /* Basic UI elements */
  { path: "/Mini-Projects-Collection-React/accordion", element: <Accordion /> },
  { path: "/Mini-Projects-Collection-React/tabs", element: <Tabs /> },
  {
    path: "/Mini-Projects-Collection-React/select-dropdown",
    element: <SelectDropdown />,
  },
  {
    path: "/Mini-Projects-Collection-React/autocomplete-chips",
    element: <AutocompleteChips />,
  },
  {
    path: "/Mini-Projects-Collection-React/skeleton-loader",
    element: <SkeletonLoader />,
  },
  {
    path: "/Mini-Projects-Collection-React/spinning-loader",
    element: <SpinningLoader />,
  },
  { path: "/Mini-Projects-Collection-React/drawer", element: <Drawer /> },
  {
    path: "/Mini-Projects-Collection-React/progress-bar-related",
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
  { path: "/Mini-Projects-Collection-React/job-board", element: <JobBoard /> },
  {
    path: "/Mini-Projects-Collection-React/like-button",
    element: <LikeButton />,
  },

  /* CSS Usage */
  { path: "/Mini-Projects-Collection-React/tweet", element: <Tweet /> },
  {
    path: "/Mini-Projects-Collection-React/grid-lights",
    element: <GridLights />,
  },
  {
    path: "/Mini-Projects-Collection-React/traffic-light",
    element: <TrafficLight />,
  },
  {
    path: "/Mini-Projects-Collection-React/star-rating",
    element: <StarRating />,
  },

  /* Intermediate Apps */
  { path: "/Mini-Projects-Collection-React/to-do-list", element: <ToDoList /> },
  {
    path: "/Mini-Projects-Collection-React/temperature-converter",
    element: <TemperatureConverter />,
  },
  {
    path: "/Mini-Projects-Collection-React/mortgage-calculator",
    element: <MortgageCalculator />,
  },

  /* Advanced Logic Apps */
  {
    path: "/Mini-Projects-Collection-React/folder-file-tree",
    element: <FolderFileTree />,
  },
  {
    path: "/Mini-Projects-Collection-React/transfer-list",
    element: <TransferList />,
  },
  {
    path: "/Mini-Projects-Collection-React/undoable-counter",
    element: <UndoableCounter />,
  },
  {
    path: "/Mini-Projects-Collection-React/generate-table",
    element: <GenerateTable />,
  },

  /* Time Apps */
  {
    path: "/Mini-Projects-Collection-React/digital-clock",
    element: <DigitalClock />,
  },
  {
    path: "/Mini-Projects-Collection-React/stop-watch",
    element: <StopWatch />,
  },
  {
    path: "/Mini-Projects-Collection-React/analog-clock",
    element: <AnalogClock />,
  },

  /* Forms */
  {
    path: "/Mini-Projects-Collection-React/contact-form",
    element: <ContactForm />,
  },
  {
    path: "/Mini-Projects-Collection-React/sign-up-form",
    element: <SignUpForm />,
  },
  {
    path: "/Mini-Projects-Collection-React/flight-booker",
    element: <FlightBooker />,
  },
  { path: "/Mini-Projects-Collection-React/otp-input", element: <OtpInput /> },
  {
    path: "/Mini-Projects-Collection-React/file-uploader",
    element: <FileUploader />,
  },

  /* Games */
  {
    path: "/Mini-Projects-Collection-React/memory-card-game",
    element: <MemoryCardGame />,
  },
  {
    path: "/Mini-Projects-Collection-React/tic-tac-toe-game",
    element: <TicTacToeGame />,
  },
  {
    path: "/Mini-Projects-Collection-React/whack-mole-game",
    element: <WhackMoleGame />,
  },
  {
    path: "/Mini-Projects-Collection-React/snake-game",
    element: <SnakeGame />,
  },
  {
    path: "/Mini-Projects-Collection-React/rock-paper-scissors",
    element: <RockPaperScissors />,
  },
]);

export default router;
