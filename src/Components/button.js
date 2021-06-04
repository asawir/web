import React from 'react';
import  'g:/reactjskprojects/calculator/node_modules/bootstrap/dist/css/bootstrap.min.css';




const Button = (props) => {
    console.log(" button components called");    
    return(
        
        <input 
        type = "button" className="btn btn-outline-success" onClick = {props.handleClick}
        value = {props.label}

        

        />
        
    );
    
}
export default Button;

