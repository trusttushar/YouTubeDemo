import React from "react";
import HeadComponent from "../components/common/HeadComponent.js";

function NotFound(props) {
  return (
    <React.Fragment>
      <HeadComponent {...props.location} />
      <div className="wrapper">
        <h1>Page NotFound</h1>
      </div>
    </React.Fragment>
  );
}

export default { element:<NotFound/> };
