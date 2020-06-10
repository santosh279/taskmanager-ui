import React from "react";
import Sidebarview from "./sidebarView";
import "./sidebar.css"

class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <Sidebarview />
    )
  }
}

export default Sidebar;