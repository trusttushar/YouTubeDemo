import React from 'react'

function index() {
  return (
    <div className="vid-comments">
        <div className="scroll-container">
            <div className="comment-msg">
                kgjhgbj
            </div>
            <div className="comment-rpl">
                reply
            </div>
        </div>
        <div className="msg-bar">
                <input type="text" placeholder="Enter text" name="message"/>
                <button type="submit"><i className="fa fa-send"></i></button>
        </div>
    </div>
  )
}

export default index