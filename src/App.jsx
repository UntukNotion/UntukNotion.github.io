import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
