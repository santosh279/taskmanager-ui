import React from "react";
import schema from "../../Utils/helper";
import ContentTable from "../ContentTable/contentTable";
const DashboardContentView = (props) => {
  return (
    <React.Fragment>
      {schema[0].task.length
        ? schema[0].task.map((task, index) => {
            return <ContentTable key={index} task={task} />;
          })
        : ""}
    </React.Fragment>
  );
};

export default DashboardContentView;
