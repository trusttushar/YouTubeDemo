import React from "react";

function Message(props) {
  return (
    <center>
      <div className="form h-100 contact-wrap p-5">
        <h3>{props.msg}</h3>
      </div>
    </center>
  );
}

export default Message;
