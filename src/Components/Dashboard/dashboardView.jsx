import React from "react";
import DashboardHeader from "../DashboardHeader/dashboardHeader";
import DashboardContent from "../DashboardContent/dashboardContent";

const DashboardView = (props) => {
  return (
    <React.Fragment>
      <DashboardHeader />
      <hr />
      <DashboardContent />
    </React.Fragment>
  );
};

export default DashboardView;
