import React, { useState } from 'react'

export default function Form() {
    const [color, setColor] = useState("");


    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
        console.log(text);
    }

    const handleKeyPress = (e) => {
        console.log(e.target.value);
        var key = e.key;
        var regex = /[a-zA-Z]/g;
        if( !regex.test(key) ) {
            e.preventDefault();
        }
        else {
            console.log( "You pressed a key: " + key );
        }
    }

    
    return (
        < >
            <input type='text' onChange={handleChange} onKeyPress={handleKeyPress} value={text} />
            <button
                className="submitBtn"
                style={{ backgroundColor: `${color}` }}
                onMouseEnter={() => setColor("red")}
                onMouseLeave={() => setColor("")}
            >
                Submit
            </button>
        </>
    )
}
