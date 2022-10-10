import React from 'react'

function SideNav(props) {


  return (
    <aside className="sidenav">
      {props.login && (
        <React.Fragment><a href="/add/video">Add Video</a>
        <a href="/my/videos">My Videos</a></React.Fragment>
      )
}
    </aside>
  )
}

export default SideNav