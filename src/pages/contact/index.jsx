import React, { useState } from 'react'
import axios from 'axios';
import { ContactBtn } from '../../components/navbar/styles';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");

  const [message, setMessage] = useState("");
  const [isSuccess, setSuccess] = useState(false);
  const [isError, SetError] = useState(false);
  const [isLoading, setIsLoading] = useState(false)




  const SubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      phoneNumber: phone,
      subject: subject,
      message: message,
      type: "contact-page"
    }
    setIsLoading(true);

    axios.post("https://knowledge-seekers.herokuapp.com/api/v1/user-message", data)
      .then(res => {
        if (res.status === 201) {
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setSubject("");
          setSuccess(true);
          setIsLoading(false);
          const setTimeInterval = setTimeout(() => { setSuccess(false) }, 3000)
        }
      })
      .catch(err => {
        SetError(true);
        setIsLoading(false);
        const setTimeIntervalError = setTimeout(() => { SetError(false) }, 3000)
      }
      )

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
              {isSuccess && <p style={{ paddingBottom: '1rem', color: 'green', fontSize: '1.3rem' }}>Thank You for Contacting Us</p>}
              {isError && <p style={{ paddingBottom: '1rem', color: 'red', fontSize: '1.2rem' }}>Sorry, Error Occured. Please Try Again</p>}

              <div className="contact-form-button">
                {isLoading
                  ? <button disabled style={{opacity : "0.4"}}>
                    <ContactBtn >Sending....</ContactBtn>
                  </button>
                  : <button>
                    <ContactBtn >SEND</ContactBtn>
                  </button>
                }
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact;