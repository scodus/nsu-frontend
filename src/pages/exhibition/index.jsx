import Exhibition from "../../components/MainNavItems/Exhibition";
import {motion} from 'framer-motion'

const index = () => {
  return (
    <>
      <div className="home-bg-copy exhibition-bg-copy bg-top-mobile ">
        <div className="home-wrapper">
          {/* <div className="home-main-title linear-wipe">Exhibition</div> */}
        </div>
      </div>
      <div className="home-bg">
        <div className="home-wrapper padding-0">
          <motion.div initial = {{y:-50,opacity:0}} animate = {{y:0,opacity:1}}  transition={{ delay : 0.15,duration : 0.75}} className="home-main-title linear-wipe flex-property"><h1 className="exhibition-h1"> Exhibition</h1></motion.div>
        </div>
      </div>

      <Exhibition />

    </>
  );
};
export default index;
