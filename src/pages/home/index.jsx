import PreLoader from "../../components/preloader";

const HomePage = () => {
  return (
    <div>
      <PreLoader />
      <div className="home-bg-copy">
        <div className="home-wrapper">
          <div className="home-main-title linear-wipe">Hackathon</div>
        </div>
      </div>
      <div className="home-bg">
        <div className="home-wrapper">
          <div className="home-main-title linear-wipe">Hackathon</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
