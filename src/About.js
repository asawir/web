import React, { Component } from 'react'


class About extends React.Component{


  // i hv coded componentdidmount func before
  // but it got executed after constructor () func
  // this is life cycle.
  // life cycle methods are used only in class components not func comp
componentDidMount(){

  // console.log("did mouont called");
}

componentDidUpdate(){

  // console.log("name was updated");
}

  constructor(){
    
    super();
    console.log("property received");
    this.state={
      name: "Asawir",
      age : 20
    }
  //  console.log("constructor called");
  }

  render(){
    // console.log("render called"); // every time is called 
    return(
      <>
      <div>Hello welcome to About Page of The IT Family</div>
      <h2>{this.props.name}</h2>
      
      <h2>{this.state.age}</h2>
      <button onClick={()=> {this.setState({name:"Asawir Jinabade"})}}>Update Name</button>
    </>
    )
  
}
}

export default About;
