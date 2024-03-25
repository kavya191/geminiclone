import React from 'react'
import './Main.css'
import { useContext } from 'react'
import { Context } from '../../Context/GeminiContext'
const Main = () => {
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src="https://i.postimg.cc/R0HdNMvZ/kavyabosephoto.jpg" alt="" />
        </div>
        <div className="main-container">
            {!showResult?
            <>
             <div className="greet">
                <p><span>Hello ,Dev</span></p>
                <p>How can i help you today?</p>
            </div>
            <div className="cards">
                <div className="card" >
                    <p>Suggest beutiful places to see on an upcoming road trip. </p>
                    <img src="https://i.postimg.cc/vBJZGwG9/compass-icon.png" alt="" />
                </div>
                <div className="card">
                    <p>Briefly summerize this concept :Urban planning </p>
                    <img src="https://i.postimg.cc/DwRGFdL0/bulb-icon.png" alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm  team bonding activities for our work retreat </p>
                    <img src="https://i.postimg.cc/gcMPyPCK/message-icon.png" alt="" />
                </div>
                <div className="card">
                    <p>Improve the readability of the following code. </p>
                    <img src="https://i.postimg.cc/XJQtgwzv/code-icon.png" alt="" />
                </div>
            </div>
            </>:
            <div className='result'>
                <div className="result-title">
                   <img src="https://i.postimg.cc/T3Fm7FYr/kavyabosephoto.jpg" alt="" /> 
                   <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src="https://i.postimg.cc/t4xfM0Nb/gemini-icon.png" alt="" />
                    {loading?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>: <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                    
                </div>
            </div>
            }
           
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)}  value={input} type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src="https://i.postimg.cc/1XPJJK4f/gallery-icon.png" alt="" />
                        <img src="https://i.postimg.cc/3rBB3mdF/mic-icon.png" alt="" />
                     {input? <img onClick={()=>onSent()} src="https://i.postimg.cc/02yCjjSR/send-icon.png" alt="" />:null}  
                    </div>
                </div>
                <p className="bottom-info">
                  Gemini may display inaccurate info , including about people so double check its responses.Your privacy and gemini Apps
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main
