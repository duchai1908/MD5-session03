import React, { useEffect, useState } from 'react'

export default function UseEffectDemo() {
    const [count,setCount] = useState(0);
    const [title,setTitle] = useState("");

    // useEffect(() =>{
    //     document.title = title;
    // })

    // useEffect(()=>{
    //     console.log("Re-render");
    // }, [])

    useEffect(()=>{
        console.log("Re-render");
    }, [count,title])

    const handleCount = () => {
        setCount((prev) => prev + 1);   
    }

  return (
    <>
        {console.log("Mount")}
        <h3>Demo useEffect</h3>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <button onClick={handleCount}>Count</button>
    </>
  )
}
