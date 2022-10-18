import React from 'react'

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

      <div className="event-container">
        <div className="event-items">
          <div className="event-items-img">
            <img src="https://picsum.photos/700/700" alt="" />
          </div>
          <div className="event-items-details">
            <h2 className='h1-height color-gold'>Hackathon</h2>
            <p className='small-height color-brown'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est rem deserunt culpa eaque, perferendis sit eveniet ipsum impedit quaerat eos numquam nihil optio beatae aperiam incidunt placeat ipsa consequatur laborum?  </p>
          </div>
        </div>

        <div className="event-items">
          <div className="event-items-img">
            <img src="https://picsum.photos/700/700" alt="" />
          </div>
          <div className="event-items-details">
            <h2 className='h1-height color-gold'>Startup Ideas</h2>
            <p className='small-height color-brown'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est rem deserunt culpa eaque, perferendis sit eveniet ipsum impedit quaerat eos numquam nihil optio beatae aperiam incidunt placeat ipsa consequatur laborum?  </p>
          </div>
        </div>

        <div className="event-items">
          <div className="event-items-img">
            <img src="https://picsum.photos/700/700" alt="" />
          </div>
          <div className="event-items-details">
            <h2 className='h1-height color-gold'>Exhibition</h2>
            <p className='small-height color-brown'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est rem deserunt culpa eaque, perferendis sit eveniet ipsum impedit quaerat eos numquam nihil optio beatae aperiam incidunt placeat ipsa consequatur laborum?  </p>
          </div>
        </div>


        <div className="event-items">
          <div className="event-items-img">
            <img src="https://picsum.photos/700/700" alt="" />
          </div>
          <div className="event-items-details">
            <h2 className='h1-height color-gold'>Robo Wars</h2>
            <p className='small-height color-brown'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est rem deserunt culpa eaque, perferendis sit eveniet ipsum impedit quaerat eos numquam nihil optio beatae aperiam incidunt placeat ipsa consequatur laborum?  </p>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Events