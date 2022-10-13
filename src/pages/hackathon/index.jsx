const Hackathon = () => {
  return (
    <>
      <div className="home-bg-copy">
        <div className="home-wrapper">
          {/* <div className="home-main-title linear-wipe">Hackathon</div> */}
        </div>
      </div>
      <div className="home-bg">
        <div className="home-wrapper">
          <div className="home-main-title linear-wipe">Hackathon</div>
        </div>
      </div>

      <div className="other-container">
        <div className="big-container">
          <h1 className="text-center h1-height h1-small">HACKATHON</h1>
          <p className=" text-center p-height extra-padding-container">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            tenetur cupiditate ut adipisci quod deserunt doloremque commodi!
            Architecto quos totam tempore omnis sit dignissimos velit. Maxime
            accusantium soluta blanditiis voluptates aperiam tempore voluptatum
            tenetur nobis corrupti quaerat. Natus aperiam culpa veritatis a
            perspiciatis quaerat deserunt, maxime incidunt consequuntur ipsum
            facilis, dicta, laboriosam dolorum nam voluptatum saepe repudiandae
            excepturi cupiditate nemo illo rerum doloribus accusantium
            quibusdam! Nulla atque culpa sapiente accusamus. Repellendus illum
            ducimus porro mollitia nobis deleniti labore doloremque recusandae.
          </p>
        </div>

        <div className="small-container hackaton-bg ">
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
