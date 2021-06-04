import React from 'react';
import TodoItem from "../MyComponents/TodoItem";

const Todos = (props) => {
    return (
            <div className="container">
                <h3 className = "my-5">Todo List</h3>

                
                {props.todos.length===0? "Enjoy you have completed all your tasks" :
                props.todos.map((todo)=>{

                return <TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete} />
                })}

               
            </div>
    )
}

export default Todos;

