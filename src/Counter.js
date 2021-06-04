import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component {
  constructor() {
      super();
    this.state = {
      counter: 10
    }
  }


  Incouter = () => {
    this.setState({ counter: this.state.counter + 1 })
  };

  Decouter = () => {
    this.setState({ counter: this.state.counter -1 })
  };


  render(){
  return (
    <>
    <p>This application shows Increamemt and Decrement of counter</p>
    <div style={{textAlign:"center"}}>

      <div style={{ textAlign: "center" }}> </div>
      <h2>Counter App</h2>
      <h1>{this.state.counter} </h1>
      <button size= "lg" className="btn btn-success"  onClick={this.Incouter}>Increamemt</button>
      <button className = "btn btn-primary" onClick={this.Decouter}>Decrement</button>
      {/* style={{backgroundColor: "red" }} */}

    </div >
    </>
  );
}
}
export default Counter ;
