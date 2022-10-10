import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import OtherPage from "./pages/utils";
import Hackathon from "./pages/hackathon";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/other" element={<OtherPage />} />
        <Route path="/hackathon" element={<Hackathon />} />
      </Routes>
    </div>
  );
}

export default App;
