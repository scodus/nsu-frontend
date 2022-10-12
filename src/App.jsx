import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./pages/home";
import OtherPage from "./pages/utils";
import Hackathon from "./pages/hackathon";
import Startup from "./pages/startup";
import Exhibition from "./pages/exhibition";
import Robowars from "./pages/robowars";

import HomepageLayout from "./layouts/HomepageLayout";

function App() {
  return (
    <div>
      <Routes>
        {/* layout wrapper  */}
        <Route element={<HomepageLayout render={() => <Outlet />} />}>
          {/* pages inside that layout */}
          <Route path="/" element={<HomePage />} />
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/startup" element={<Startup />} />
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path="/robowars" element={<Robowars />} />
          <Route path="/other" element={<OtherPage />} />
          {/* end of pages  */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
