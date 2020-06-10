import React from "react";
import "./dashboardHeader.css";
import plugIcon from "../../Assets/icons/electricity.png";
import roboIcon from "../../Assets/icons/bot.png";
import videoIcon from "../../Assets/icons/video.png";
import hamIcon from "../../Assets/icons/ham.png";

const DashboardHeaderView = (props) => {
  return (
    <React.Fragment>
      <div className="row row-extend">
        <div className="col col-extend">
          <p className="workspace-font">{"Workspace name"}</p>
          <span
            className={
              props.isFav ? "fa fa-star fav checked" : "fa fa-star fav"
            }
          ></span>
          <div className="col-sm-10">
            <i
              style={{ color: "#100808" }}
              className="fa fa-user-circle-o"
              title="shared"
              aria-hidden="true"
            ></i>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              className={"plug-in"}
              style={{ color: "#100808" }}
              title="custom"
              aria-hidden="true"
            >
              <img className={"image-plugin"} src={plugIcon} alt="custom" />
              &nbsp;&nbsp;
              {"/"}
              &nbsp;&nbsp;
              {"0"}
            </button>
            <div style={{ marginTop: "-31px", marginLeft: "195px" }}>
              <button
                className={"robo-in"}
                style={{ color: "#100808" }}
                title="auto"
                aria-hidden="true"
              >
                <img className={"robo-plugin"} src={roboIcon} alt="robo" />
                &nbsp;&nbsp;
                {"/"}
                &nbsp;&nbsp;
                {"0"}
              </button>
            </div>
            <div style={{ marginTop: "-29px", marginLeft: "240px" }}>
              <button
                className={"zoom-in"}
                style={{ color: "#100808" }}
                title="zoom"
              >
                <img className={"zoom-plugin"} src={videoIcon} alt="zoom" />
                &nbsp;&nbsp;
                {"/"}
                &nbsp;&nbsp;
                {"start zoom call"}
              </button>
            </div>
            <div style={{ marginTop: "-29px", marginLeft: "240px" }}>
              <button
                className={"ham-in"}
                style={{ color: "#100808" }}
                title="ham"
                aria-hidden="true"
              >
                <img className={"ham-plugin"} src={hamIcon} alt="ham" />
              </button>
            </div>
          </div>
          <div className="col-sm-2 description">
            <input
              className="input-description"
              placeholder="Add board description"
              type="text"
              id="input-description"
            ></input>
          </div>
        </div>
      </div>
      <div className="row row-extend-2">
        <div className="col col-extend">
          <div className="col-sm-12" style={{ display: "flex" }}>
            <i className="fa fa-table" aria-hidden="true"></i>
            <p
              style={{
                display: "block",
                marginLeft: "8px",
                marginTop: "-5px",
              }}
            >
              {"Main Table"}
            </p>
            <div className="new-item-div">
              <button className="new-item add-button btn btn-primary"> New Item</button>
            </div>
            <div className="search-bar">
              <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search Board / Filter Board"
                aria-label="Search"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardHeaderView;
