import React from 'react'
import { motion } from 'framer-motion'

const bodyContainer = {
  background: "linear-gradient(180deg, #000032 0%, #171720 100%)",
  // paddingLeft : "15.7rem",
  // paddingRight : "15.7rem"
  paddingTop: "11.5rem"
}

function Events() {
  return (
    <div className='other-body-container big-container' style={bodyContainer}>
      <h1 className='h1-height color-white font-family-gravedigger '>OUR EVENTS</h1>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.75 }} className="event-container">
        <div className="event-items">
          <div className="event-items-img">
            <img src="https://picsum.photos/700/700" alt="" />
          </div>
          <div className="event-items-details">
            <h2 className='h1-height color-gold'>Hackathon</h2>
            <p className='small-height color-brown'>
              A hackathon, also known as a codefest, is a social coding event that brings computer programmers and other interested people together to improve upon or build a new software program.

            </p>
          </div>
        </div>

        <div className="event-items">
          <div className="event-items-img">
            <img src="https://picsum.photos/700/700" alt="" />
          </div>
          <div className="event-items-details">
            <h2 className='h1-height color-gold'>Startup Ideas</h2>
            <p className='small-height color-brown'>
              The term startup refers to a company in the first stages of operations. Startups are founded by one or more entrepreneurs who want to develop a product or service for which they believe there is demand.
            </p>
          </div>
        </div>

        <div className="event-items">
          <div className="event-items-img">
            <img src="https://picsum.photos/700/700" alt="" />
          </div>
          <div className="event-items-details">
            <h2 className='h1-height color-gold'>Exhibition</h2>
            <p className='small-height color-brown'>  An exhibition is a public event at which pictures, sculptures, or other objects of interest are displayed, for example at a museum or art gallery.</p>
          </div>
        </div>


        <div className="event-items">
          <div className="event-items-img">
            <img src="https://picsum.photos/700/700" alt="" />
          </div>
          <div className="event-items-details">
            <h2 className='h1-height color-gold'>Robo Wars</h2>
            <p className='small-height color-brown'>War waged by intelligent machines conducted by humans ensconced in bunkers or roaming from stand-off command centers at sea or in air can alter the face of the battlefield. </p>
          </div>
        </div>


      </motion.div>

    </div>
  )
}

export default Events