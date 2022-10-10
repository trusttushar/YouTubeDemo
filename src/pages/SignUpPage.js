import React,{useEffect} from 'react'
import HeadComponent from "../components/common/HeadComponent.js";
import NavBar from "../components/common/NavBar";
import SignUp from "../components/SignUp";

function SignUpPage(props) {

  useEffect(() => {
    if (window.sessionStorage.getItem('token')) {
      window.location.href = "/";
    }
}, []);
    return (
        <React.Fragment>
        <HeadComponent {...props.location} />
        <NavBar />
        <SignUp />
      </React.Fragment>
      )
}

export default { element:<SignUpPage/> }