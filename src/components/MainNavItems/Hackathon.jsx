import React from 'react'
import AllPageContact from './AllPageContact'

function Hackathon() {
  return (
    <div className="other-container">
      <div className="big-container">
        <h1 className="text-center h1-height h1-small">HACKATHON</h1>
        <p className=" text-center p-height extra-padding-container">
          A hackathon, also known as a codefest, is a social coding event that brings computer programmers and other interested people together to improve upon or build a new software program.
        </p>
      </div>

      <div className="small-container hackaton-bg ">
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

export default Hackathon