import React, { forwardRef } from 'react'
import { motion } from 'framer-motion';


// const animations = {
//   initial: { opacity: 0, y: -100 },
//   animate: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: 100 },
// }



const ScrollInAnimations = forwardRef((props, ref) => {

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    />
  )
});

export default ScrollInAnimations