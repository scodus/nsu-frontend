import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function AllPageContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setSuccess] = useState(false);
  const [isError, SetError] = useState(false);
  const [isLoading,setIsLoading] = useState(false)
  const location = useLocation();

  const SubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      phoneNumber: phone,
      subject: subject,
      message: message,
      type: location.pathname.split('/')[1]
    }

    setIsLoading(true);

    axios.post("https://knowledge-seekers.herokuapp.com/api/v1/user-message", data)
      .then(res => {
        console.log("Res is ",res)
        if (res.status === 201) {
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setSubject("");
          setSuccess(true);
          setIsLoading(false)
          setTimeout(() => { setSuccess(false) }, 3000);
        }
      })
      .catch(err => {
        SetError(true);
        setIsLoading(false);
        setTimeout(() => { SetError(false) }, 3000)
      })

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
              <input type="text" name="name" value = {name} placeholder="Esther Howard" required onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="form--input">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                type="text"
                name="email"
                placeholder="jacksone@gmail.com"
                required
                value  = {email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form--input">
              <label htmlFor="phone">PHONE NUMBER</label>
              <input type="text" value={phone} name="phone" placeholder="9835645362" required onChange={(e) => setPhone(e.target.value)} />
            </div>

            <div className="form--input">
              <label htmlFor="subject">SUBJECT</label>
              <input type="text" name="subject" value={subject} placeholder="Type here" required onChange={(e) => setSubject(e.target.value)} />
            </div>

            <div className="form--input full-width">
              <label htmlFor="message">MESSAGE</label>
              <textarea name="" id="" cols="30" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>

            {isSuccess && <p style={{ paddingBottom: '1rem', color: 'green', fontSize: '1.3rem' }}>Thank You for Contacting Us</p>}
            {isError && <p style={{ paddingBottom: '1rem', color: 'red', fontSize: '1.2rem' }}>Sorry, Error Occured. Please Try Again</p>}

            <div className="btn full-width text-right">
              {isLoading 
              ? <button disabled style={{opacity : "0.4"}}>Sending....</button>
              : <button>Send Message</button>
              }
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AllPageContact