import RoboWars from "../../components/MainNavItems/RoboWars";
import {motion} from 'framer-motion'
const index = () => {
  return (
    <>
      <div className="home-bg-copy robo-wars-bg-copy robo-war-bg-mobile">
      </div>
      <div className="home-bg">
        <div className="home-wrapper">
        <motion.div initial = {{y:-50,opacity:0}} animate = {{y:0,opacity:1}}  transition={{ delay : 0.15,duration : 0.75}} className="home-main-title linear-wipe-startup robo-war-h1-mobile"><h1 className="exhibition-h1">Robo Wars</h1></motion.div>

        </div>
      </div>

    <RoboWars />
      
    </>
  );
};
export default index;
