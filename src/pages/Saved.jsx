import React from "react";
import "./Saved.css";

const Saved = () => {
  const map =
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1659.7091666469482!2d51.33544368242769!3d35.48156748886622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1673729076483!5m2!1sen!2s";

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1659.7091666469482!2d51.33544368242769!3d35.48156748886622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1673729076483!5m2!1sen!2s"
    width="600"
    height="450"
    style="border:0;"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>;

  return (
    <div>
      <>
        <div className="contacts_container">
          <div className="one">
            <div>
              <iframe
                src={map}
                title="mytitle"
                className="iframe"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="container shadow flexSB">
            <div className="right row">
              <h1>Contact us</h1>
              <p>We're open for any suggestion or just to have a chat</p>

              <div className="items grid2">
                <div className="box">
                  <h4>ADDRESS:</h4>
                  <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
                <div className="box">
                  <h4>EMAIL:</h4>
                  <p> info@yoursite.com</p>
                </div>
                <div className="box">
                  <h4>PHONE:</h4>
                  <p> + 1235 2355 98</p>
                </div>
              </div>

              <form action="">
                <div className="flexSB">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                </div>
                <input type="text" placeholder="Subject" />
                <textarea cols="30" rows="10">
                  Create a message here...
                </textarea>
                <button className="primary-btn">SEND MESSAGE</button>
              </form>

              {/* <h3>Follow us here</h3> */}
              {/* <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span> */}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Saved;
