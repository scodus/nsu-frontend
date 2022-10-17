import React, { useState } from 'react'
import ContactSubmitBtn from '../../assets/contactsubmitbtn.svg'
import axios from 'axios';
import { ContactBtn } from '../../components/navbar/styles';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");

  const [message, setMessage] = useState("");
  const [isSuccess, setSuccess] = useState(false);

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
        if (res.status === 200){
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setSubject("");
          setSuccess(true);
          const setTimeInterval = setTimeout(() => {setSuccess(false)},3000)
        }
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
                <input type="text" value={name} name='name' placeholder='Esther Howard' required onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="form--input">
                <label htmlFor="phone">EMAIL ADDRESS</label>
                <input type="text" value={email} name='phone' placeholder='jackson.legend@gmail.com' required
                  onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="form--input">
                <label htmlFor="name">PHONE NUMBER</label>
                <input type="number" value={phone} name='name' placeholder='98186574635' required onChange={(e) => setPhone(e.target.value)} />
              </div>

              <div className="form--input full-width">
                <label htmlFor="message">MESSAGE</label>
                <textarea name="" value={message} id="" cols="30" placeholder='Type here' required onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
              { isSuccess && <p style={{paddingBottom : '1rem',color:'green',fontSize : '1.3rem'}}>Thank You for Contacting Us</p> }
              
              <div className="contact-form-button">
                <button>
                  <ContactBtn >SEND</ContactBtn>
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