const Hackathon = () => {
  return (
    <>
      <div className="home-bg-copy">
        <div className="home-wrapper">
          {/* <div className="home-main-title linear-wipe">Exhibition</div> */}
        </div>
      </div>
      <div className="home-bg">
        <div className="home-wrapper">
          <div className="home-main-title linear-wipe">Exhibition</div>
        </div>
      </div>

      <div className="other-container">
        <div className="big-container">
          <h1 className="h1-height">EXHIBITION</h1>
          <p className="p-height extra-padding-right-container font-size-20 color-brown">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            quisquam asperiores sed voluptatem tenetur earum voluptatibus nemo,
            suscipit enim non iusto ad alias laudantium labore amet, sapiente
            officiis odit? Error alias id, iste voluptatibus blanditiis magni
            hic nam autem aspernatur cupiditate animi corrupti, illo, aliquam
            reprehenderit voluptas earum. Accusantium unde facere, corporis
            explicabo consectetur debitis dolores eos doloribus repudiandae
            quaerat!
          </p>
        </div>

        <div className="small-container exhibition-bg">
          <h2 className="color-gold h1-height">WHO CAN PARTICIPATE ?</h2>
          <ul className="ul-color-white">
            <li>Why consistent writing makes you a better designer</li>
            <li>5 soft skills every product designer should master</li>
            <li>The UX Writing Starter-Kit</li>
          </ul>
        </div>

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
            <form action="">
              <div className="form-inputs">
                <div className="form--input">
                  <label htmlFor="name">YOUR NAME</label>
                  <input type="text" name="name" placeholder="Esther Howard" />
                </div>

                <div className="form--input">
                  <label htmlFor="email">EMAIL ADDRESS</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="jacksone@gmail.com"
                  />
                </div>

                <div className="form--input">
                  <label htmlFor="phone">PHONE NUMBER</label>
                  <input type="text" name="phone" placeholder="9835645362" />
                </div>

                <div className="form--input">
                  <label htmlFor="subject">SUBJECT</label>
                  <input type="text" name="subject" placeholder="Type here" />
                </div>

                <div className="form--input full-width">
                  <label htmlFor="message">MESSAGE</label>
                  <textarea name="" id="" cols="30"></textarea>
                </div>

                <div className="btn full-width text-right">
                  <button>Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hackathon;
