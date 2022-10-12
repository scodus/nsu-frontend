import React from 'react'

function Contact() {
  return (
    <>
      <div style={{ background: "#131324", height: "100vh" }} className="other-container">
        <div className="contact-form-page-container">
          <div className="contact-left">
            <h1>WE'D LOVE TO HEAR FROM YOU</h1>
          </div>
          <div className="contact-right">
            <h2>CONTACT US</h2>

            <form action="">
              <div className="form--input">
                <label htmlFor="name">YOUR NAME</label>
                <input type="text" name='name' placeholder='Esther Howard' />
              </div>

              <div className="form--input">
                <label htmlFor="phone">PHONE NUMBER</label>
                <input type="text" name='phone' placeholder='9835645362' />
              </div>

              <div className="form--input">
                <label htmlFor="name">PHONE NUMBER</label>
                <input type="text" name='name' placeholder='Esther Howard' />
              </div>

              <div className="form--input full-width">
                <label htmlFor="message">MESSAGE</label>
                <textarea name="" id="" cols="30"></textarea>
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact;