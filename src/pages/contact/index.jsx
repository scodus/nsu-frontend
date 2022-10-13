import React, { useState } from 'react'
import ContactSubmitBtn from '../../assets/contactsubmitbtn.svg'
import axios from 'axios';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");

  const [message, setMessage] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      phone: phone,
      subject: subject
    }

    axios.post("https://nsu-project-dbc22-default-rtdb.firebaseio.com/data.json", data)
      .then(res => {
        console.log("Res is ", res)
      })
      .catch(err => console.log("err is ", err))

  }

  return (
    <>
      <div style={{ background: "#131324" }} className="other-body-container">
        <div className="contact-form-page-container">
          <div className="contact-left">
            <h1 className='h1-small color-white'>WE'D LOVE TO HEAR FROM YOU</h1>
          </div>
          <div className="contact-right">
            <h2 className='color-grayscale small-height-padding'>CONTACT US</h2>

            <form action="" onSubmit={SubmitHandler}>
              <div className="form--input">
                <label htmlFor="name">YOUR NAME</label>
                <input type="text" name='name' placeholder='Esther Howard' required onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="form--input">
                <label htmlFor="phone">EMAIL ADDRESS</label>
                <input type="text" name='phone' placeholder='jackson.legend@gmail.com'  required
                onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="form--input">
                <label htmlFor="name">PHONE NUMBER</label>
                <input type="number" name='name' placeholder='98186574635' required onChange={(e) => setPhone(e.target.value)} />
              </div>

              <div className="form--input full-width">
                <label htmlFor="message">MESSAGE</label>
                <textarea name="" id="" cols="30" placeholder='Type here' required onChange={(e) => setMessage(e.target.value)}></textarea>
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