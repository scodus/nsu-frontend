import Hackathon from "../../components/MainNavItems/Hackathon";
import {motion} from 'framer-motion';

const index = () => {
  return (
    <>
      <div className="home-bg-copy hackathon-bg-copy bg-center-mobile">
        <div className="home-wrapper">
          {/* <div className="home-main-title linear-wipe">Hackathon</div> */}
        </div>
      </div>
      <div className="home-bg">
        <div className="home-wrapper">
          <motion.div initial = {{y:-50,opacity:0}} animate = {{y:0,opacity:1}}  transition={{ delay : 0.15,duration : 0.75}} className="home-main-title linear-wipe "><h1  className="exhibition-h1"> Hackathon </h1></motion.div>
        </div>
      </div>

    <Hackathon />
    </>
  );
};
export default index;
