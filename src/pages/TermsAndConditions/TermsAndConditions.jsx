import React from 'react'
import { motion } from 'framer-motion';


const bodyContainer = {
  background: "linear-gradient(180deg, #000032 0%, #171720 100%)",
  // paddingLeft : "15.7rem",
  // paddingRight : "15.7rem"
  paddingTop: "11.5rem"
}


function TermsAndConditions() {
  return (
    <div className='other-body-container big-container' style={bodyContainer}>
        <h1 className='h1-height'>Terms and Conditions</h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.75 }} className="event-container">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt impedit blanditiis aliquam eaque, tempora magni quo ab at eveniet officia.</p>
      </motion.div>
    </div>
  )
}

export default TermsAndConditions