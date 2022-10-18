import PreLoader from "../../components/preloader";
import { Footer, Header, HomeParent } from "./styles";
import GuestSection from "./GuestSection";
import EventSection from "./EventSection";
import StartingDate from "./StartingDate";
import SponsorSection from "./SponsorSection";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ScrollInAnimations from "../../components/Animations/ScrollInAnimations";

const HomePage = () => {
  const location = useLocation();
  const eventRef = useRef(null);

  return (
    <HomeParent>
      {!location?.state?.clicked && <PreLoader />}
      {/* Hero Section */}

      <Header />
      <div className="home-main-title linear-wipe linear-wipe-home-page">
        <h1 className="exhibition-h1"> NSU TECHFEST 2.0 </h1>
      </div>

      {/* this is guest area */}
      <GuestSection />
      {/* this is all our events section */}
        <ScrollInAnimations ref = {eventRef} />
        <EventSection ref={eventRef} />
      {/* start end text in here */}
      <StartingDate />
      {/* sponsor area here */}
      <SponsorSection />
    </HomeParent>
  );
};

export default HomePage;
