import React from 'react'
import AllPageContact from './AllPageContact'

function RoboWars() {
  return (
    <div className="other-container">
      <div className="big-container">
        <h1 className="h1-height">ROBOWAR</h1>
        <p className="p-height extra-padding-right-container font-size-20 color-brown">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          quisquam asperiores sed voluptatem tenetur earum voluptatibus nemo,
          suscipit enim non iusto ad alias laudantium labore amet, sapiente
          officiis odit? Error alias id, iste voluptatibus blanditiis magni
          hic nam autem aspernatur cupiditate animi corrupti, illo, aliquam
          reprehenderit voluptas earum. Accusantium unde facere, corporis
          explicabo consectetur debitis dolores eos doloribus repudiandae
          quaerat!
        </p>
      </div>

      <div className="small-container robo-wars-bg">
        <h2 className="color-gold h1-height">WHO CAN PARTICIPATE ?</h2>
        <ul className="ul-color-white">
          <li>Why consistent writing makes you a better designer</li>
          <li>5 soft skills every product designer should master</li>
          <li>The UX Writing Starter-Kit</li>
        </ul>
      </div>

     <AllPageContact />
    </div>
  )
}

export default RoboWars