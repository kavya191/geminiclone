import React, { useState } from 'react'
import './SideBar.css'
const SideBar = () => {
    const [extend, setExtend] = useState(false)
    return (
        <div className='sideBar'>
            <div className="top">
                <img onClick={()=>setExtend(prev=>!prev)} className='menu' src="https://i.postimg.cc/PJP6FbSm/menu-icon.png" alt="" />
                <div className="new_chat">
                    <img src="https://i.postimg.cc/zf8Jh3fC/plus-icon.png" alt="" />
                    {extend ? <p>New Chat</p> : null}

                </div>
                {
                    extend ? <div className="recent">
                        <p className="recent_title">Recent</p>
                        <div className="recent_entry">
                            <img src="https://i.postimg.cc/nz5b3Lnw/message-icon.png" alt="" />
                            <p>What is react ?</p>
                        </div>
                    </div> : null
                }

            </div>
            <div className="bottom">
                <div className="bottom_item recent_entry">
                    <img src="https://i.postimg.cc/RFn45tpz/question-icon.png" alt="" />
                    {extend?<p>Help</p>:null}
                    
                </div>
                <div className="bottom_item recent_entry">
                    <img src="https://i.postimg.cc/L53d23zG/history-icon.png" alt="" />
                    {extend?<p>Acitivity</p>:null}
                    
                </div>
                <div className="bottom_item recent_entry">
                    <img src="https://i.postimg.cc/Ls1bmVSv/setting-icon.png" alt="" />
                    {extend? <p>Settings</p>:null}
                   
                </div>
            </div>
        </div>
    )
}

export default SideBar
