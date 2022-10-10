import React,{useState, useRef} from 'react'
import { useLazyQuery } from "@apollo/client";
import {searchVideos} from "../../graphQL/query"


function NavBar(props) {
  const [ getSearchVideo, { loading, data }] = useLazyQuery(searchVideos);
  console.log("pppppppp",data)

  const [text,setText] = useState("")
  const timeOut = useRef()
  let handleInputChange = function(e){
      setText(e.target.value)
      clearTimeout(timeOut.current)
      timeOut.current = setTimeout(() => {
          getSearchVideo({ variables: {title:e.target.value}})
      },500)
  }
  const handleLogOut =(e)=>{
    e.preventDefault()
    sessionStorage.setItem("token", "");
    window.location.href = "/";
  }

  return (
    <nav>
        <a className="logo" href="/">YouTube</a>
        <div className="search-bar">
          <input type="text" onChange={handleInputChange} value={text} placeholder="Search.." name="search"/>

          <i className="fa fa-search"></i>
          {data && data.searchVideos &&
          <div className="sug">
          <ul>
            {
          data.searchVideos.map(val=>{
          return <li key={val._id}><a href={"/video/" + val._id}>{val.title}</a></li>
          })
        }
          </ul>
          </div>
}
        </div>
        
        {!props.login ? 
                (
                  <React.Fragment><a className="split" href="/signin">Sign In</a>
                  <a className="split" href="/signup">Sign Up</a></React.Fragment>
                ) :
        <a className="split" href="#" onClick={handleLogOut}>Log Out</a> 
        }
    </nav>
  )
}

export default NavBar