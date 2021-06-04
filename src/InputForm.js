import React, {useState} from 'react';
import './index.css'



const InputForm = ()=> {
    const [name, setName] = useState("");
    const [fullName, setFullName] = useState("");
    const [lastName, setLastName] = useState("");

    const inputEvent=(e)=>{
       setName(e.target.value)
    }

    const onSubmit=(event)=> {
        event.preventDefault();
        setFullName(name)
    
    }
    const inputEventTwo=(event)=> {
        event.preventDefault();
        setLastName(event.target.value)
    
    }

    return(
        <>
        <div className="divclass">
            <form onSubmit={onSubmit}>
            <h1>Hi how are you {fullName}{lastName} </h1>
            <input type = "text" placeholder="Enter your name" onChange={inputEvent} value= {name}/>
            <p/>
            <input type = "text" placeholder="Enter your Last Name" onChange={inputEventTwo} value= {lastName}/>
            <p/>
            <button className = "btn btn-success" type="submit">Click Me</button>
            </form>
        </div>

        </>
    )
}

export default InputForm;