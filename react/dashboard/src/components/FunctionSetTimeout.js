import React from 'react'

export default function FunctionSetTimeout() {
    const handleTimeout = () =>{
        setTimeout(()=>{
            console.log("Hello, from set Timeout");
        },2000)
    }  
    return (
        <div>
            <button onClick={handleTimeout}> Timeout </button>
        </div>
    )
}
