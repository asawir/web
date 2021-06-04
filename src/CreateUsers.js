import React, {useState}from 'react';

function CreateUsers(){

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");

function makeUser()
{
    let data={name, age, address}
    console.warn("input values", data);
}
    return(
        <>

        <h1>Make a New User</h1>
        <input type = "text " name = "username" onChange={(e)=>setName(e.target.value)} value ={name} /><p />
        <input type = "text " name = "age" onChange={(e)=>setAge(e.target.value)} value ={age} /><p />
        <input type = "text " name = "address" onChange={(e)=>setAddress(e.target.value)} value ={address} /> <p />
        <button onClick={(e)=>makeUser()}>Create User</button>
        </>
    )
}

export default CreateUsers;