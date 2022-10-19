import { Routes, Route, Outlet, useNavigate, useLocation } from "react-router-dom";
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
import { AnimatePresence } from 'framer-motion';
import Privacy from "./pages/privacy/Privacy";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import PreLoader from "./components/preloader";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate({ state: null });
  }, []);
  const location = useLocation();
  const { pathname } = location;
  return (
    <div>
       {pathname === '/' && !location?.state?.clicked &&
        <PreLoader />
      }
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location = {location}>
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
            <Route path="/sponsers" element={<Sponsers />} />
            <Route path="/events" element={<EventPage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/termsandcondition" element={<TermsAndConditions />} />
            

            <Route path="/other" element={<OtherPage />} />

            {/* end of pages  */}
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
