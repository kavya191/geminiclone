import { createContext, useState } from "react";
import runChat from "../Services/gemini";

export const Context=createContext();
export const ContextProvider=(props)=>{
    const[input,setInput]=useState("");//hold inputs
    const[recentPrompt,setRecentPrompt]=useState(""); //save inputs
    const[previousPrompt,setPreviousPrompt]=useState([])//previous or recent data 
    const[showResult,setShowResult]=useState(false)//true hide
    const[loading,setLoading]=useState(false); //loading animation
    const[resultData,setResultData]=useState("") //display result

    const onSent=async(prompt)=>{
        setResultData("")
        setLoading(true)
        setShowResult(true)
      const response=  await runChat(input)
        setResultData(response)
        setLoading(false)
        setInput("")
    
    }

    const contextValue={
        previousPrompt,
        setPreviousPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        loading,
        showResult,
        resultData,
        input,
        setInput

    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;