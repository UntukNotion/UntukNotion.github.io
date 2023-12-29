import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import MySQL from "./page/MySQL";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mysql-cheat-sheet" element={<MySQL />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
