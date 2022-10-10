import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import HeadComponent from "../components/common/HeadComponent.js";
import NavBar from "../components/common/NavBar";
import VideoPlayArea from "../components/VideoPlayArea";
import CommentSideBar from "../components/CommentSideBar";
import { useQuery} from '@apollo/client';
import {getVideo} from "../graphQL/query"

function VideoPage(props) {
  let VideoId = useParams()
  const { loading, error, data } = useQuery(getVideo, {
    variables: { id:VideoId ? VideoId.id : "" }
  });
  const [login,setLogin] =useState(false)
  useEffect(() => {
    if (window.sessionStorage.getItem('token')) {
      setLogin(true);
    }
}, []);

  return (
        <React.Fragment>
          <HeadComponent {...props.location} />
          <NavBar login={login}/>
          {data && data.getVideo &&
          <div className="play-main">
            <VideoPlayArea {...data.getVideo}/>
            <CommentSideBar login={login}  />
          </div>
          }
          {error && 
          <div className="play-main">
            <h4>No Data Found</h4>
          </div>
          }
        </React.Fragment>
  )
}

export default { element:<VideoPage/> }