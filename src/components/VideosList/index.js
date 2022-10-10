import React from 'react'
import { useQuery} from '@apollo/client';
import {getVideos} from "../../graphQL/query"
function index(props) {
  const { loading, error, data } = useQuery(getVideos);
  console.log("data---",data)
  return (
    <div className="content">
        <h5>{props.title}</h5>
        <hr></hr>
        { data && data.getVideos &&
        data.getVideos.map(val=>{
        return <div key={val._id} className="video-item">
            <a href={"/video/" + val._id}>
                <img src={process.env.REACT_APP_API_BASE_URL + "/static/" + val.thumbnail} alt={val.title} width="600" height="400"/>
            </a>
            <h5>{val.title}</h5>
            <p>{val.discription}</p>
            {props.title==="My videos" &&
            <div>
                 <button type="button" className="btn btn-primary">Edit</button>
                 <button type="button" className="btn btn-danger">Delete</button>
            </div>
        }
        </div>
  })
}
    </div>
  )
}

export default index