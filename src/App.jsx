import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import HomePage from "./pages/home";
import OtherPage from "./pages/utils";
import Hackathon from "./pages/hackathon";
import Startup from "./pages/startup";
import Exhibition from "./pages/exhibition";
import Robowars from "./pages/robowars";

import HomepageLayout from "./layouts/HomepageLayout";
import { useEffect } from "react";
import Contact from "./pages/contact";
import Teams from "./components/teams/Teams";
import PanelList from "./components/panellist/PanelList";
import Sponsers from "./pages/sponsers";
import EventPage from "./pages/events";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate({ state: null });
  }, []);
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/panel" element={<PanelList />} />
          <Route path="/sponsers" element={ <Sponsers /> } />
          <Route path="/events" element = { <EventPage />  } />
          


          <Route path="/other" element={<OtherPage />} />

          {/* end of pages  */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
