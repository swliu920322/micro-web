import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./Home";
import { Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="video" element={<Home />} />
        <Route path="video" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
