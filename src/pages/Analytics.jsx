import React from "react";
import { ReactComponent as WorkIcon } from "../work.svg";
import { ReactComponent as SchoolIcon } from "../school.svg";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timelineElements from "./timelineElements";
import "./Analytics.css";

const Analytics = () => {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div>
      <div className="timeline_header">
        <h1>پروژه خط جدید</h1>
      </div>
      <div className="timeline_top">
        {/* <img src="./images/timeline1.png" alt="/" /> */}
        <video loop autoPlay>
          <source src="./images/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <VerticalTimeline lineColor="#000000">
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">{element.title}</h3>
              <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`} href="/">
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Analytics;
