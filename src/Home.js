import React, {useState} from 'react';

function Home()
{
    const [val, setVal]= useState("")

    const test1 =(e)=> 
    {
        console.warn("test function", e.target.value)
        setVal(e.target.value)
    }
function test(){
    console.log("click me button clicked");
}

    return(
        <>
        <h1>Home Page of Asawir Jinabade</h1><br></br>
        <input type = "text" value={val} onChange={test1} /><br></br>
        <button onClick={()=>{alert("Hello button was click")}}>Hello</button><br></br>
        <button onClick={()=>alert("input box value", {val})}>Alert</button>
        </>

    )
}
/* arraow => binds to click event */
        // normal function test() will call only once
        //but {test} will bind

export default Home;