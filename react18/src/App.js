import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import { Home } from "./Home";
import { Routes } from "react-router";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="video" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
