import React from "react";

function Error(props) {
  return (
    <label id="" className="error" for="validation-email">
      {" "}
      {props.msg}
    </label>
  );
}

export default Error;
