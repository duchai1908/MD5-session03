import React, { useState } from 'react'

export default function UseStateDemo() {

    const [count, setCount] = useState(0);

    const handleCount = () =>{
        // setCount(count + 1);
        // setCount(count + 2);
        // setCount(count + 3);
        // use 3 line like that -> jsx will read the last one. We will do this to add 3 times
        setCount((prev)=>prev+1);
        setCount((prev)=>prev+2);
        setCount((prev)=>prev+3);
    }

    // const [userName, setuserName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    
    //in case there are lots of value in user -> new way to create
    const [userInfo, setUserInfor] = useState({
        userName: "",
        userEmail: "",
        userPassword: ""
    });

    console.log("User info", userInfo);
    

    const handleSubmit = (e) =>{
        //stop reload page
        e.preventDefault();

        console.log("submit",userInfo);
        
    }
    
    const handleChange = (e) =>{
        // const name = e.target.name;
        // const value = e.target.value;

        //other way to create name,value
        const {name,value} = e.target;
        setUserInfor({
            ...userInfo,
            [name]:value
        })
    }

  return (
    <>
    <h3>count: {count}</h3>
    <button onClick={handleCount}>count</button>

    <form onSubmit={handleSubmit}>
        {/* <input onChange={(event)=>setuserName(event.target.value)} name='userName' value={userName} type="text" placeholder='enter name'/>
        <input onChange={(event)=>setEmail(event.target.value)} name='userEmail' value={email} type="text" placeholder='enter email'/>
        <input onChange={(event)=>setPassword(event.target.value)} name='userPassword' value={password} type="text" placeholder='enter pass'/> */}
        <input onChange={handleChange} name='userName'  type="text" placeholder='enter name'/>
        <input onChange={handleChange} name='userEmail'  type="text" placeholder='enter email'/>
        <input onChange={handleChange} name='userPassword'  type="text" placeholder='enter pass'/>
        <button type='submit'>Submit</button>
        <button type='button'>Cancel</button>
    </form>
    </>
  )
}
