import React from 'react'
import DiscordLogo from '../../assets/DiscordLogo.svg'

const bodyContainer = {
  background: "linear-gradient(180deg, #000032 0%, #171720 100%)",
  // paddingLeft : "15.7rem",
  // paddingRight : "15.7rem"
}

function Sponser() {
  return (
    <div className='other-body-container' style={bodyContainer}>
      <div className="team-member">
      <div className="team-member-title text-center">
                    <h1 className='color-white h1-small font-family-gravedigger' style={{ paddingBottom: '1.1rem' }}>OUR SPONSERS</h1>
                    <p className='font-size-15 small-height-padding color-grayscale300' >So we can tailor your support experience. If that’s not possible, we’d still like to hear from you.</p>
                </div>
      </div>

      <div className="sponser-content-container">
        <div className="sponser-content extra-padding-container extra-padding-container">

            <div className="sponser-items">
              <h3 className='text-center pb-05'>GOLD SPONSER</h3>
              <div className="sponser-list">
                  <div className="sponser-info">
                    <img src={DiscordLogo} alt="" />
                    <img src={DiscordLogo} alt="" />
                    <img src={DiscordLogo} alt="" />
                    <img src={DiscordLogo} alt="" />
                    <img src={DiscordLogo} alt="" />
                    <img src={DiscordLogo} alt="" />
                  </div>
              </div>

            </div>

            <div className="sponser-items">
              <h3 className='text-center pb-05'>PLATINIUM   SPONSER</h3>
              <div className="sponser-list">
                  <div className="sponser-info">
                    <img src={DiscordLogo} alt="" />
                    <img src={DiscordLogo} alt="" />
                    <img src={DiscordLogo} alt="" />
                    <img src={DiscordLogo} alt="" />
                    <img src={DiscordLogo} alt="" />
                    <img src={DiscordLogo} alt="" />
                  </div>
              </div>

            </div>

            <div className="sponser-items">
              <h3 className='text-center pb-05'>GOLD SPONSER</h3>
              <div className="sponser-list">
                  <div className="sponser-info">
                    <img src={DiscordLogo} alt="" />
                    <img src={DiscordLogo} alt="" />
                    <img src={DiscordLogo} alt="" />
                    <img src={DiscordLogo} alt="" />
                    <img src={DiscordLogo} alt="" />
                    <img src={DiscordLogo} alt="" />
                  </div>
              </div>

            </div>
        </div>
      </div>



    </div>

  )
}

export default Sponser