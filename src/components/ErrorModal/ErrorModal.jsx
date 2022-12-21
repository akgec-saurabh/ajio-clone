import { Error } from "@mui/icons-material";
import React from "react";
import "./ErrorModal.scss";
import * as ReactDOM from "react-dom";
const Modal = ({ props, onClick }) => {
  console.log(props);
  return (
    <div className="backdrop">
      <div className="container">
        <div className="title">
          <Error className="icon" />
          {props.title}
        </div>
        <div className="message">{props.message}</div>
        <button onClick={onClick} className="button">
          Okay
        </button>
      </div>
    </div>
  );
};

const ErrorModal = ({ props, onClick }) => {
  console.log(props);
  return (
    <>
      {ReactDOM.createPortal(
        <Modal props={props} onClick={onClick} />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default ErrorModal;
