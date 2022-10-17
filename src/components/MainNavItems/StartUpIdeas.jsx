import React from 'react'
import AllPageContact from './AllPageContact'
import {motion} from 'framer-motion';

function StartUpIdeas() {
  return (
    <div className="other-container">
      <div className="big-container">
        <  h1 className="text-center h1-height h1-small">Start UP Ideas</h1>
        <p className=" text-center p-height extra-padding-container color-brown">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
          tenetur cupiditate ut adipisci quod deserunt doloremque commodi!
          Architecto quos totam tempore omnis sit dignissimos velit. Maxime
          accusantium soluta blanditiis voluptates aperiam tempore voluptatum
          tenetur nobis corrupti quaerat. Natus aperiam culpa veritatis a
          perspiciatis quaerat deserunt, maxime incidunt consequuntur ipsum
          facilis, dicta, laboriosam dolorum nam voluptatum saepe repudiandae
          excepturi cupiditate nemo illo rerum doloribus accusantium
          quibusdam! Nulla atque culpa sapiente accusamus. Repellendus illum
          ducimus porro mollitia nobis deleniti labore doloremque recusandae.
        </p>
      </div>

      <div className="small-container start-up-bg" >
        <motion.h2 viewport = {{once : false}} initial = {{opacity : 0,x : -100}} whileInView = {{opacity : 1,x :0}} transition = {{type : "easeIn", duration : 1, delay : 0.15}}  className="color-gold h1-height">WHO CAN PARTICIPATE ?</motion.h2>
        <motion.ul viewport = {{once : false}} initial = {{opacity : 0,x : -100}} whileInView = {{opacity : 1.25,x :0}} transition = {{type : "easeIn", duration : 1, delay : 0.20}} className="ul-color-white">
          <li>Why consistent writing makes you a better designer</li>
          <li>5 soft skills every product designer should master</li>
          <li>The UX Writing Starter-Kit</li>
        </motion.ul>
      </div>

      <AllPageContact />
    </div>
  )
}

export default StartUpIdeas