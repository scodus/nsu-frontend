import React from 'react'
import ContactSubmitBtn from '../../assets/contactsubmitbtn.svg'

function Contact() {
  return (
    <>
      <div style={{ background: "#131324" }} className="other-body-container">
        <div className="contact-form-page-container">
          <div className="contact-left">
            <h1 className='h1-small color-white'>WE'D LOVE TO HEAR FROM YOU</h1>
          </div>
          <div className="contact-right">
            <h2 className='color-grayscale small-height-padding'>CONTACT US</h2>

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
              <div className="contact-form-button">
                <button>
                  <img src={ContactSubmitBtn} alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact;