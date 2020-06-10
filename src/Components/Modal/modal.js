import React from "react";
import ModalView from "./modalView";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { show, handleClose,
      modalHeading, addWorkSpace,
      onChangeNewWorkspace, handleModalSave, 
      hasError
      } = this.props;
    return (
      <ModalView
        hasError             = { hasError }
        handleModalSave      = { handleModalSave }
        handleClose          = {handleClose}
        show                 = {show}
        addWorkSpace         = {addWorkSpace}
        modalHeading         = {modalHeading}
        onChangeNewWorkspace = {onChangeNewWorkspace}
      />
    )
  }
}

export default Modal;