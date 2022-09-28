import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import OtherPage from "./pages/utils";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/other" element={<OtherPage />} />
      </Routes>
    </div>
  );
}

export default App;
