import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Users from './Users';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateUsers from './CreateUsers';
import { Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Counter from './Counter';
import InputForm from './InputForm';
import Footer from './Footer';
import MasterTodos from './masterTodos';
import Statewise from './statewise';
import Calculator from './Components/Calculator';

function App() {
  const [city, setCity] = useState("Kudachi");
  const [name, setName] = useState("Asawir");

  useEffect(() => {
    // console.warn("hook used");
  }, [name])

  return (
    <div className="App">
  
      <Router>

        {/* navbar starts  */}

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light">
          <a class="navbar-brand" href="#">The IT Family</a>
          <ul class="navbar-nav mr-auto ">
            <Nav.Link href="#home"><Link to="/About">About</Link></Nav.Link>
            <Nav.Link href="#home"><Link to="/Contact">Contact</Link></Nav.Link>
            <Nav.Link href="#home"><Link to="/Users">API</Link></Nav.Link>
            <Nav.Link href="#home"><Link to="/CreateUsers">CreateUsers</Link></Nav.Link>
            <Nav.Link href="#Counter"><Link to="/Counter">Counter</Link></Nav.Link>
            <Nav.Link href="#home"><Link to="/InputForm">Input</Link></Nav.Link>
            <Nav.Link href="#home"><Link to="/MasterTodos">Todo</Link></Nav.Link>
            <Nav.Link href="#home"><Link to="/Statewise">Covid</Link></Nav.Link>
            <Nav.Link href="#home"><Link to="/Calculator">Calculator</Link></Nav.Link>

            <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
          </ul>
        </nav>


        {/* navbar ends */}


        


        {/* switches starts here */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/CreateUsers">
            <CreateUsers />
          </Route>
          
          <Route path="/Counter">
            <Counter />
          </Route>
          <Route path="/InputForm">
            <InputForm />
          </Route>
          <Route path="/MasterTodos">
            <MasterTodos />
          </Route>
          <Route path ="/Statewise">
              <Statewise />
          </Route> 
          <Route path ="/Calculator">
            <Calculator  />
          </Route>       
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* switches ends here */}





      </Router>
      <Footer />
    </div>
  );
}

export default App;
