import React from "react";

function Alert(props) {
  return (
    props.alert && (
      <>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          style={{
            color: props.mode === "dark" ? "white" : "black",
            backgroundColor: props.mode === "dark" ? "#c6f89d" : "#c6f89d",
          }}
          role="alert"
        >
          <strong>{props.alert.type}</strong> : {props.alert.msg}
        </div>
      </>
    )
  );
}

export default Alert;
