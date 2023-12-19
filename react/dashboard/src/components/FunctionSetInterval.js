import React, {useEffect, useState} from 'react'

export default function FunctionSetInterval() {
    const [date, setDate] = useState(null)

    useEffect(() => {
        showDate()
    }, []);

    const showDate = () =>{
        setInterval(()=>{
            let current = new Date();
            let cDate = current.getDate() + '-' + (current.getMonth() + 1) + '-' + current.getFullYear();
            let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
            let dateTime = cDate + ' ' + cTime;
            setDate(dateTime);

        },1000)
    }
    return (
        <div>
            {date}
        </div>
    )
}
