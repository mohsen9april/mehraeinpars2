import React from "react";
import "../Head/Head.css";

const Head = () => {
  return (
    <>
      <div className="header">
        <div className="onee">
          <img src="./images/logo.png" alt="/" />
        </div>
        {/* <div className="twoo">
          <button> Dark Mode </button>
        </div> */}
        <div className="threee">
          <div>
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
