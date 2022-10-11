import PreLoader from "../../components/preloader";
import HomepageLayout from "../../layouts/HomepageLayout";
import { Header } from "./styles";

import GuestSection from "./GuestSection";
import EventSection from "./EventSection";
import StartingDate from "./StartingDate";

const HomePage = () => {
  return (
    <div>
      {/* <PreLoader /> */}
      <Header />
      {/* this is guest area */}
      <GuestSection />
      {/* this is all our events section */}
      <EventSection />

      {/* start end text in here */}
      <StartingDate />
    </div>
  );
};

const HomePageWithNavbar = () => {
  return <HomepageLayout render={() => <HomePage />} />;
};

export default HomePageWithNavbar;
