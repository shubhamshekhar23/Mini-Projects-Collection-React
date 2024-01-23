import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import router from "./router/router";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <a href="/Mini-Projects-Collection-React/">Home</a>
        <a
          href="/Mini-Projects-Collection-React/z-playground"
          style={{ display: "none" }}
        >
          z-playground
        </a>
      </header>
      <main className="router_content">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
