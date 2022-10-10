import React,{useEffect} from 'react'
import HeadComponent from "../components/common/HeadComponent.js";
import NavBar from "../components/common/NavBar";
import SignIn from "../components/SignIn";

function SignInPage(props) {
  useEffect(() => {
    if (window.sessionStorage.getItem('token')) {
      window.location.href = "/";
    }
}, []);
  return (
    <React.Fragment>
    <HeadComponent {...props.location} />
    <NavBar />
    <SignIn />
  </React.Fragment>
  )
}

export default { element:<SignInPage/> }