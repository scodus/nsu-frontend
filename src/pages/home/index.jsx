import PreLoader from "../../components/preloader";
import { Header, HomeParent } from "./styles";
import GuestSection from "./GuestSection";
import EventSection from "./EventSection";
import StartingDate from "./StartingDate";
import SponsorSection from "./SponsorSection";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <HomeParent>
      {/* {!location?.state?.clicked && <PreLoader />} */}
      {/* Hero Section */}

      {/* <PreLoader /> */}

      <Header className="bg-center-mobile" />
      <div className="home-main-title linear-wipe linear-wipe-home-page">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.75 }}
          className="exhibition-h1"
        >
          {" "}
          NSU TECHFEST 2022{" "}
        </motion.h1>
      </div>

      {/* this is guest area */}
      <GuestSection />
      {/* this is all our events section */}
      <EventSection />
      {/* start end text in here */}
      <StartingDate />
      {/* sponsor area here */}
      <SponsorSection />
    </HomeParent>
  );
};

export default HomePage;
