import React from 'react'

export default function FunctionSetInterval() {
    const handleInterval = () =>{
        setInterval(()=>{
            console.log("Hello, from set interval");
        },2000)
    }  
    return (
        <div>
            <button onClick={handleInterval}> Interval </button>
        </div>
    )
}
