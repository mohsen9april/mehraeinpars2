import React from "react";
import "../Head/Head.css";
import Button from "@mui/material/Button";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const Head = () => {
  return (
    <>
      <div className="header">
        <div className="onee">
          <a href="/" className="header_logo">
            <img src="./images/logo.png" alt="/" />
          </a>
        </div>
        {/* <div className="twoo">
          <button> Dark Mode </button>
        </div> */}
        <div className="header_account">
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            startIcon={<AccountCircleRoundedIcon />}
          >
            حساب کاربری
          </Button>
          {/* <div>
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Head;
