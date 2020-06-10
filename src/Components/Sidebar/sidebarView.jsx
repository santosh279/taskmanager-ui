import React from "react";
import NotificationIcon from "../../Assets/icons/bell.png";
import CalenderIcon from "../../Assets/icons/calendar.png";
import SearchIcon from "../../Assets/icons/search.png";
import FaqIcon from "../../Assets/icons/askquestion.png";

const Sidebarview = () => {
  return (
    <React.Fragment>
      <div className="sidenav">
        {/* <img src={""} alt={"img"}></img> */}
        <a href="#notification">
          <img
            style={{ width: "20px", color: "#D0C6C6" }}
            title="notification"
            src={NotificationIcon}
            alt="bell"
          />
        </a>
        <a href="#download" style={{ marginBottom: "210px" }}>
          <i
            style={{ color: "#100808" }}
            className="fa fa-download"
            title="download"
            aria-hidden="true"
          ></i>
        </a>

        <a href="#calender">
          <img
            style={{ width: "20px" }}
            title="calender"
            src={CalenderIcon}
            alt="bell"
          />
        </a>
        <a href="#addperson">
          <i
            className="fa fa-user-plus"
            title="addperson"
            style={{ color: "#100808" }}
            aria-hidden="true"
          ></i>
        </a>
        <a href="#search">
          <img
            style={{ width: "20px", color: "#D0C6C6" }}
            title="search"
            src={SearchIcon}
            alt="bell"
          />
        </a>
        <a href="#faq">
          <img
            style={{ width: "20px", color: "#D0C6C6" }}
            title="FAQ"
            src={FaqIcon}
            alt="bell"
          />
        </a>
        <a href="#profile">
          <i
            style={{ color: "#100808" }}
            className="fa fa-user-circle-o"
            title="User"
            aria-hidden="true"
          ></i>
        </a>
      </div>
    </React.Fragment>
  );
};

export default Sidebarview;
