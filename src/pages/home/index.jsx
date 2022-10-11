import PreLoader from "../../components/preloader";
import HomepageLayout from "../../layouts/HomepageLayout";
import { Footer, Header, HomeParent } from "./styles";

import GuestSection from "./GuestSection";
import EventSection from "./EventSection";
import StartingDate from "./StartingDate";
import SponsorSection from "./SponsorSection";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {
  const { pathname } = useLocation();

  return (
    <HomeParent>
      {<PreLoader />}
      {/* Hero Section */}
      <Header />
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
