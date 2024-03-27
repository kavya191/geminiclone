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

     const delayPara=(index,nextWord)=>{
        setTimeout(function(){
            setResultData(prev=>prev+nextWord)
        },75*index)
     }
     const newChat=()=>{
        setLoading(false)
        setShowResult(false)
     }
    const onSent=async(prompt)=>{

        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response;
        if(prompt !== undefined){
            response= await runChat(prompt)
            setRecentPrompt(prompt)
        }else{
            setPreviousPrompt(prev=>[...prev,input])
            setRecentPrompt(input)
            response=await runChat(input)
        }
        setRecentPrompt(input)
       
        let responseArray=response.split("**")
        let newResponse="";
        for(let i = 0; i<responseArray.length;i++){
            if(i === 0 || i%2 !== 1){
                newResponse += responseArray[i]
            }
            else{
                newResponse += "<b>"+responseArray[i]+"</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>")
        let newResponseArray=newResponse2.split(" ");
        for(let i=0;i<newResponseArray.length;i++){
            const nextWord=newResponseArray[i];
            delayPara(i,nextWord+" ")
        }
      
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
        setInput,
        newChat

    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;