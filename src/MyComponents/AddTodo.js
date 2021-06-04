import {useState} from 'react';


export const AddTodo = (props) => {
    
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
    const submit=(e)=> {
        e.preventDefault();
        if(!title || !desc){
            alert("Ttitle ad desc cannot be blank");
        }
               
        }
        
        props.addTodo(title, desc);

    return (
        <div className= "container my-3">
            <h3>Add a Todo Task</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Title of Todo</label>
                    <input value ={title} type="title" onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
                    
                </div>
                <div className="form-group my-2">
                    <label htmlFor="desc">Describe your Task</label>
                    <input value ={desc} type="desc" onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
                </div>
                
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo;