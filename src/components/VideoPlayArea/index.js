import React from 'react'

function index(props) {
  console.log("props._id",props._id)
  return (
    <React.Fragment>
    <div className="video-container">
        <video controls>
            <source src={process.env.REACT_APP_API_BASE_URL + "/video/" + props._id} type="video/mp4" />
            {props.discription}
        </video>
        <h4>{props.title}</h4>
        <div className="desc">{props.discription}</div>
    </div>
    </React.Fragment>
  )
}

export default index