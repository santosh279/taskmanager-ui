import React from "react";
import SubSidebarView from "./subSidebarView";
import Modal from "../Modal/modal";

class SubSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      openModal: false,
      place_active: false,
      workSpaceList: [],
      workSpaceName : "",
      description : "",
      hasError : false
    }
  }

  closeCollapse = () => {
    this.setState({
      collapse: true
    })
  }

  clickedOnDownArrow = (index) => {
    this.setState({
      place_active: true,
      index
    })
  }

  addWorkSpaceModal = () => {
    this.setState({
      openModal: true
    })
  }

  handleClose = () => {
    this.setState({
      openModal: false
    })
  }

  onChangeNewWorkspace = (e, uid) => {
    const value = e.target.value;
    const { hasError } = this.state
    if(uid === "workSpaceName" && hasError) {
      this.setState({
        hasError : false
      })
    }
    this.setState({
      [uid]: value
    })
  }



  handleModalSave = () => {
    const { workSpaceName, description } = this.state;
    if (workSpaceName.length) {
      this.setState((prevState) => ({
        workSpaceList: [...prevState.workSpaceList, {
          workSpaceName, description
        }],
        openModal : false
      }))
    } else {
      this.setState({
        hasError : true
      })
      this.setFocus("workSpaceName")
    }
  }

  /**set focus for the required field */
  setFocus = (uid) => {
    document.getElementById(uid).focus()
  }


  render() {
    const { workSpaceList,
      place_active, index, 
      openModal, hasError } = this.state
    const { clickedOnDownArrow,
      handleClose, addWorkSpaceModal,
      onChangeNewWorkspace, handleModalSave } = this;
    return (
      <React.Fragment>
        {
          openModal &&
          <Modal
            show={openModal}
            handleClose={handleClose}
            modalHeading={"Add Workspace"}
            addWorkSpace={true}
            onChangeNewWorkspace={onChangeNewWorkspace}
            handleModalSave={handleModalSave}
            hasError = { hasError }
          />
        }
        <SubSidebarView
          clickedOnDownArrow={clickedOnDownArrow}
          addWorkSpaceModal={addWorkSpaceModal}
          workSpaceList={workSpaceList}
          place_active={place_active}
          index={index}
        />
      </React.Fragment>
    )
  }
}

export default SubSidebar