import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import router from "./router/router";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <a href="/">Home</a>
        <a href="/z-playground">z-playground</a>
      </header>
      <main className="router_content">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
