/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./subsidebar.css";
import homeIcon from "../../Assets/icons/home.png";
import AvailableAt from "../../Assets/images/googlestore.png";

const SubSidebarView = (props) => {
  return (
    <React.Fragment>
      <div className={"subsidebarnav"}>
        <div className="col-md-3">
          <span className="work-text">{"Workspace"}</span>
          <button type="button" className="button btn btn-light">
            <i
              style={{
                fontSize: "25px",
                marginTop: "-5px",
                marginLeft: "-3px",
              }}
              className="fa fa-angle-left"
            ></i>
          </button>
        </div>
        <div className=".col-auto .mr-auto search-box">
          <input
            className="form-control form-control-sm ml-3 w-75"
            type="text"
            placeholder="Search Board"
            aria-label="Search"
          />
        </div>
        <div className="main">
          <ul className="list-unstyled">
            <li style={{ marginTop: "10px", marginRight: "95px" }}>
              <a
                href="#menu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
                style={{
                  marginLeft: "-22px",
                  padding: "5px",
                  color: "none",
                }}
              ></a>
              <img style={{ width: "32px" }} src={homeIcon} alt=""></img>
              <p
                style={{
                  marginTop: "-26px",
                  marginBottom: "1rem",
                  marginRight: "-90px",
                }}
              >
                {"Main"}
              </p>
              <button
                type="button"
                style={{
                  marginLeft: "-35px",
                  marginTop: "-46px",
                  background: "white-smoke",
                }}
                className="button btn btn-light"
                onClick={(e) => props.addWorkSpaceModal()}
              >
                <i
                  style={{
                    fontSize: "20px",
                    marginTop: "-1px",
                    marginLeft: "-6px",
                  }}
                  className="fa fa-plus"
                ></i>
              </button>
              <div className="child-arrange">
                <ul className="collapse list-unstyled" id="menu">
                  {props.workSpaceList.length === 0 ? (
                    <p>{"No Workspace Found"}</p>
                  ) : (
                    props.workSpaceList.map((item, index) => {
                      return (
                        <div key={index}>
                          <li
                            className={
                              props.place_active && props.index === index
                                ? "active"
                                : ""
                            }
                          >
                            <a onClick={(e) => props.clickedOnDownArrow(index)}>
                              {item.workSpaceName.charAt(0).toUpperCase() +
                                item.workSpaceName.slice(1)}
                            </a>
                          </li>
                        </div>
                      );
                    })
                  )}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="center col-md-3">
          <p>{"Dashboard"}</p>
        </div>
        <div className="col-md-3">
          <img className="google-asset" src={AvailableAt} alt="app" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SubSidebarView;
