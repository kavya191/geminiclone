import React from 'react'
import './Main.css'
const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src="https://i.postimg.cc/R0HdNMvZ/kavyabosephoto.jpg" alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello ,Dev</span></p>
                <p>How can i help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                    <img src="https://i.postimg.cc/vBJZGwG9/compass-icon.png" alt="" />
                </div>
                <div className="card">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                    <img src="https://i.postimg.cc/gcMPyPCK/message-icon.png" alt="" />
                </div>
                <div className="card">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                    <img src="https://i.postimg.cc/XJQtgwzv/code-icon.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
