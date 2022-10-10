import React,{useState,useEffect} from 'react'
import HeadComponent from "../components/common/HeadComponent.js";
import NavBar from "../components/common/NavBar";
import SideNav from "../components/common/SideNav";
import MyVideos from "../components/MyVideos";


function MyVideosPage(props) {
  const [login,setLogin] =useState(false)
  React.useEffect(() => {
    if (window.sessionStorage.getItem('token')) {
      setLogin(true);
    }
}, []);
  return (
    <React.Fragment>
      <HeadComponent {...props.location} />
      <NavBar login={login}/>
      <div className="main">
            <SideNav login={login}/>
            <MyVideos title="My videos"/>
      </div>
    </React.Fragment>
  );
}

export default { element:<MyVideosPage/> }