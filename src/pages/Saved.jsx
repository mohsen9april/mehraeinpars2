import React from "react";
import "./Saved.css";

const Saved = () => {
  const map =
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1659.7091666469482!2d51.33544368242769!3d35.48156748886622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1673729076483!5m2!1sen!2s";

  return (
    <div>
      <>
        <div className="contactus_image">
          <img src="./images/aboutus2.png" alt="/" />
        </div>

        <div className="contactpg_container">
          <div className="left_contactus">
            <div>
              <iframe
                src={map}
                className="iframe"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="mytitlee"
              ></iframe>
            </div>
          </div>

          <div className="right_contactus">
            <div className="name_email">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="subject_">
              <input type="text" placeholder="Subject" className="subject" />
            </div>
            <div className="textarea">
              <textarea cols="30" rows="10">
                Create a message here...
              </textarea>
            </div>
            <div className="sendmassage">
              <button className="sendmassage_btn">SEND MESSAGE</button>
            </div>
          </div>
        </div>

        {/* <img src="./images/contactfrom1.png" alt="/" /> */}
      </>
    </div>
  );
};

export default Saved;
