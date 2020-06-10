import React from "react";
import "./modal.css";
import { Modal, Button } from "react-bootstrap";

const ModalView = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.modalHeading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.addWorkSpace ? (
          <div className="form">
            <div className="form-group">
              <label className="control-label" htmlFor="WorkspaceName">
                Workspace Name
              </label>{" "}
              <span className="required">*</span>
              <input
                id="workSpaceName"
                className="form-control"
                type="text"
                placeholder="Enter Workspace Name"
                onChange={(e) => {
                  props.onChangeNewWorkspace(e, "workSpaceName");
                }}
              ></input>
            </div>
            {props.hasError && (
              <p className="error">{"Workspace Name is Required"}</p>
            )}
            <div className="form-group">
              <label className="control-label" htmlFor="description">
                Description
              </label>{" "}
              <textarea
                id="description"
                className="form-control"
                type="text"
                placeholder="Enter Description"
                onChange={(e) => {
                  props.onChangeNewWorkspace(e, "description");
                }}
              ></textarea>
            </div>
          </div>
        ) : (
          ""
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={props.handleModalSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalView;
