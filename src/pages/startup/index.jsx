import "../../assets/css/styles.css";
import StartUpIdeas from "../../components/MainNavItems/StartUpIdeas";

const index = () => {
  return (
    <>
      <div className="home-bg-copy startup-bg-copy">
        <div className="home-wrapper">
          {/* <div className="home-main-title linear-wipe">Startup Ideas</div> */}
        </div>
      </div>
      <div className="home-bg">
        <div className="home-wrapper wrapper-management-200">
          <div className="home-main-title linear-wipe linear-wipe-startup"> <h1 className="start-up-h1">Startup</h1></div>
          <div className="home-main-title linear-wipe linear-wipe-startup"> <h1 className="start-up-h1">Ideas</h1></div>

        </div>
      </div>

      <StartUpIdeas />
      
    </> 
  );
};
export default index;
