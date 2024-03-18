import React from 'react'
import './SideBar.css'
const SideBar = () => {
  return (
    <div className='sideBar'>
      <div className="top">
        <img className='menu' src="https://i.postimg.cc/PJP6FbSm/menu-icon.png" alt="" />
        <div className="new_chat">
            <img src="https://i.postimg.cc/zf8Jh3fC/plus-icon.png" alt="" />
            <p>New Chat</p>
        </div>
        <div className="recent">
            <p className="recent_title">Recent</p>
            <div className="recent_entry">
            <img src="https://i.postimg.cc/nz5b3Lnw/message-icon.png" alt="" />
            <p>What is react ?</p>
            </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom_item recent_entry">
            <img src="https://i.postimg.cc/RFn45tpz/question-icon.png" alt="" />
            <p>Help</p>
        </div>
        <div className="bottom_item recent_entry">
            <img src="https://i.postimg.cc/L53d23zG/history-icon.png" alt="" />
            <p>Acitivity</p>
        </div>
        <div className="bottom_item recent_entry">
            <img src="https://i.postimg.cc/Ls1bmVSv/setting-icon.png" alt="" />
            <p>Settings</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar
