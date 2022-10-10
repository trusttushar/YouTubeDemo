import React from 'react'
import { useQuery,useMutation} from '@apollo/client';
import {userVideos} from "../../graphQL/query"
import {deleteVideo} from "../../graphQL/mutations"
function index(props) {
  const { loading, error, data, refetch } = useQuery(userVideos);
  const [deleteVideoCall, { deletedData, loadingDeletedData, DeletedData }] = useMutation(deleteVideo);
  const handleDelete = (id)=>{
    console.log("id****************************",id)
    deleteVideoCall({ variables: {id:id}});
    refetch();
  }
  console.log("my vvvvvvvvvvvvv",data)
  return (
    <div className="content">
        <h5>{props.title}</h5>
        <hr></hr>
        { data && data.user && data.user.video &&
        data.user.video.map(val=>{
        return <div key={val._id} className="video-item">
            <a href={"/video/" + val._id}>
                <img src={process.env.REACT_APP_API_BASE_URL + "/static/" + val.thumbnail} alt={val.title} width="600" height="400"/>
            </a>
            <h5>{val.title}</h5>
            <p>{val.discription}</p>
            {props.title==="My videos" &&
            <div>
                 <button type="button" className="btn btn-primary">Edit</button>
                 <button type="button" onClick={()=>handleDelete(val._id)} className="btn btn-danger">Delete</button>
            </div>
        }
        </div>
  })
}
    </div>
  )
}

export default index