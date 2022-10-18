import "../../assets/css/styles.css";
import StartUpIdeas from "../../components/MainNavItems/StartUpIdeas";
import {motion} from 'framer-motion'

const index = () => {
  return (
    <>
      <div className="home-bg-copy startup-bg-copy bg-right-mobile">
      </div>
      <div className="home-bg">
        <div className="home-wrapper wrapper-management-200 padding-top">
          <motion.div initial = {{y:-50,opacity:0}} animate = {{y:0,opacity:1}}  transition={{ delay : 0.15,duration : 0.75}} className="home-main-title linear-wipe linear-wipe-startup"> <h1  className="start-up-h1">Startup</h1></motion.div>
          <motion.div initial = {{opacity:0}} animate = {{opacity:1}}  transition={{ delay : 0.50,duration : 0.75}} className="home-main-title linear-wipe linear-wipe-startup"> <h1 className="start-up-h1">Ideas</h1></motion.div>

        </div>
      </div>

      <StartUpIdeas />
      
    </> 
  );
};
export default index;
