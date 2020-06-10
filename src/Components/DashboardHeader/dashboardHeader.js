import React from "react";
import DashboardHeaderView from "./dashboardHeaderView";

class DashboardHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <DashboardHeaderView
        isFav={false}
      />
    )
  }
}

export default DashboardHeader