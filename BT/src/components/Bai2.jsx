import React, { useState } from 'react'

export default function Bai2() {
    const [text, setText] = useState("");
    const [error, setError] = useState("");
    const handleText = (e) => {
        if (e.target.value.length>10){
            setError("Qua 10 ki tu");
        }else{
            setText(e.target.value);
            setError("");
        }
    }
  return (
    <div>
        <h3>Bai 2</h3>
        <input type="text" onChange={handleText}/>
        <h3>length: {text.length}</h3>
        <h3 style={{color:'red'}}>{error}</h3>
    </div>
  )
}
