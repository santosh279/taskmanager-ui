import React from "react";
import "./contentTable.css";

const ContentTable = (props) => {
  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>{props.task.task_title}</th>
            <th>Owner</th>
            <th>Status</th>
            <th>Due date</th>
            <th>Priority</th>
            <th>
              <button className="btn btn-dark button-1"> + </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.task.subTasks.length
            ? props.task.subTasks.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.sub_title}</td>
                    <td>{item.owner}</td>
                    <td>{item.status}</td>
                    <td>{item.due_date}</td>
                    <td>{item.priority}</td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default ContentTable;
