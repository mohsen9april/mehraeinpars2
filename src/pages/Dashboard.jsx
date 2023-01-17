import React, { useEffect } from "react";
import "./Dashboard.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const homeAbout = [
  {
    id: 1,
    cover: "https://img.icons8.com/dotty/80/000000/storytelling.png",
    title: "Online Courses",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 1,
    cover: "https://img.icons8.com/ios/80/000000/diploma.png",
    title: "Earn A Certificates",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 1,
    cover: "https://img.icons8.com/ios/80/000000/athlete.png",
    title: "Learn with Expert",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
];

export const online = [
  {
    cover: "./images/courses/online/o1.png",
    hoverCover: "./images/courses/online/o1.1.png",
    courseName: "UI/UX Design Courses",
    course: "25 Courses",
  },
  {
    cover: "./images/courses/online/o2.png",
    hoverCover: "./images/courses/online/o2.1.png",
    courseName: "Art & Design",
    course: "25 Courses",
  },
  {
    cover: "./images/courses/online/o3.png",
    hoverCover: "./images/courses/online/o3.1.png",
    courseName: "Computer Science",
    course: "10 Courses",
  },
  {
    cover: "./images/courses/online/o4.png",
    hoverCover: "./images/courses/online/o4.1.png",
    courseName: "History & Archeologic",
    course: "15 Courses",
  },
  {
    cover: "./images/courses/online/o5.png",
    hoverCover: "./images/courses/online/o5.1.png",
    courseName: "Software Engineering",
    course: "30 Courses",
  },
  {
    cover: "./images/courses/online/o6.png",
    hoverCover: "./images/courses/online/o6.1.png",
    courseName: "Information Software",
    course: "60 Courses",
  },
  {
    cover: "./images/courses/online/o7.png",
    hoverCover: "./images/courses/online/o7.1.png",
    courseName: "Health & Fitness",
    course: "10 Courses",
  },
  {
    cover: "./images/courses/online/o8.png",
    hoverCover: "./images/courses/online/o8.1.png",
    courseName: "Marketing",
    course: "30 Courses",
  },
  {
    cover: "./images/courses/online/o9.png",
    hoverCover: "./images/courses/online/o9.1.png",
    courseName: "Graphic Design",
    course: "80 Courses",
  },
  {
    cover: "./images/courses/online/o10.png",
    hoverCover: "./images/courses/online/o10.1.png",
    courseName: "Music",
    course: "120 Courses",
  },
  {
    cover: "./images/courses/online/o11.png",
    hoverCover: "./images/courses/online/o11.1.png",
    courseName: "Business Administration",
    course: "17 Courses",
  },
  {
    cover: "./images/courses/online/o12.png",
    hoverCover: "./images/courses/online/o12.1.png",
    courseName: "Web Management",
    course: "17 Courses",
  },
];

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div id="heading">
        <h3>{subtitle} </h3>
        <h1>{title} </h1>
      </div>
    </>
  );
};

const Dashboard = () => {
  useEffect(() => {
    AOS.init({
      delay: 200,
      throttleDelay: 99,
    });
  }, []);

  return (
    <div>
      <div className="header_Dashboard">
        <div className="left_header_dashboard">
          <h1>کاغذ سازی مهر آیین پارس</h1>
        </div>
        <div className="right_header_dashboard">
          <span></span>
        </div>
      </div>
      <div className="video_top">
        <video loop autoPlay>
          <source src="./images/video.mp4" type="video/mp4" />
        </video>
      </div>

      <br />
      <br />

      <section className="aboutHome">
        <div className="about_container">
          <div
            className="left row"
            // data-aos="fade-up-right"
            // data-aos-offset="200"
            // data-aos-delay="30"
            // data-aos-duration="500"
            // data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            // data-aos-once="false"
            // data-aos-anchor-placement="top-center"
          >
            <div>
              <img src="./images/about.webp" alt="/" />
            </div>
          </div>
          <div className="right row">
            <Heading subtitle="LEARN ANYTHING" title="Benefits About Online Learning Expertise" />
            <div className="items">
              {homeAbout.map((val) => {
                return (
                  <div className="item flexSB">
                    <div className="img">
                      <img src={val.cover} alt="/" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <br />
      <div
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-delay="30"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        // data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <img style={{ display: "flex", margin: "auto" }} src="./images/image1.png" alt="/" />
      </div>
      <br></br>
      <br></br>

      <div
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="30"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        // data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <section className="online">
          <div className="container">
            <Heading subtitle="COURSES" title="Browse Our Online Courses" />
            <div className="content grid3">
              {online.map((val) => (
                <div className="box">
                  <div className="img">
                    <img src={val.cover} alt="/" />
                    <img src={val.hoverCover} alt="/" className="show" />
                  </div>
                  <h1>{val.courseName}</h1>
                  <span>{val.course}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <br />
      <img style={{ display: "flex", margin: "auto" }} src="./images/aboutus1.png" alt="/" />
      <br />
      <br />
      <h1> Who We Are </h1>
      <img style={{ display: "flex", margin: "auto" }} src="./images/image2.png" alt="/" />
    </div>
  );
};

export default Dashboard;
