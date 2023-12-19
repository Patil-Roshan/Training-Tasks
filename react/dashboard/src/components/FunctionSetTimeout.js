import React, {useState} from 'react'

export default function FunctionSetTimeout() {
    const [date, setDate] = useState("")
    const [showTime, setShowTime] = useState(false)
    const [text, setText] = useState("")
    const handleTimeout = () => {
        if (showTime === false){
            setText("You will get output after 2 seconds..")
        }else {
            setText("")
        }
        setTimeout(() => {
            let current = new Date();
            let cDate = current.getDate() + '-' + (current.getMonth() + 1) + '-' + current.getFullYear();
            let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
            let dateTime = cDate + ' ' + cTime;
            setDate(dateTime);
        }, 2000)
        setShowTime(!showTime);
    }
    return (
        <div>
            <button onClick={handleTimeout}>
                Timeout
            </button>
            <p>{text} </p>

            <div style={{margin: "25px"}}>
                {showTime && <p>{date}</p>}
            </div>
        </div>
    )
}
