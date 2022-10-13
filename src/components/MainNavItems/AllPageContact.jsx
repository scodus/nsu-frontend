import React, { useEffect, useState } from 'react'
import axios from 'axios';

function AllPageContact() {
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
    <div className="big-container">
      <div className="contact-form-container border-white ">
        <div className="form-title text-center">
          <h3 className="p-height">FILL THE FORM</h3>
          <p className="small-height opacity-color-white">
            So we can tailor your support experience.
          </p>
          <p className="small-height opacity-color-white h1-height">
            If that's not possible, we'd still like to hear from you.
          </p>
        </div>
        <form action="" onSubmit={SubmitHandler}>
          <div className="form-inputs">
            <div className="form--input">
              <label htmlFor="name">YOUR NAME</label>
              <input type="text" name="name" placeholder="Esther Howard" required onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="form--input">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                type="text"
                name="email"
                placeholder="jacksone@gmail.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form--input">
              <label htmlFor="phone">PHONE NUMBER</label>
              <input type="text" name="phone" placeholder="9835645362" required onChange={(e) => setPhone(e.target.value)} />
            </div>

            <div className="form--input">
              <label htmlFor="subject">SUBJECT</label>
              <input type="text" name="subject" placeholder="Type here" required onChange={(e) => setSubject(e.target.value)} />
            </div>

            <div className="form--input full-width">
              <label htmlFor="message">MESSAGE</label>
              <textarea name="" id="" cols="30" required onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>

            <div className="btn full-width text-right">
              <button>Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AllPageContact