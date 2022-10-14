import PreLoader from "../../components/preloader";
import { Footer, Header, HomeParent } from "./styles";
import GuestSection from "./GuestSection";
import EventSection from "./EventSection";
import StartingDate from "./StartingDate";
import SponsorSection from "./SponsorSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  return (
    <HomeParent>
      {!location?.state?.clicked && <PreLoader />}
      {/* Hero Section */}
      <Header />
        <div className="home-main-title linear-wipe linear-wipe-home-page">NSU TECHFEST</div>

      {/* this is guest area */}
      <GuestSection />
      {/* this is all our events section */}
      <EventSection />
      {/* start end text in here */}
      <StartingDate />
      {/* sponsor area here */}
      <SponsorSection />

      <Footer>privacy and policy 2022</Footer>
    </HomeParent>
  );
};

export default HomePage;
