
import React from 'react';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import TodoItem from './MyComponents/TodoItem';
import Todos from './MyComponents/Todos';
import {useState} from 'react';
import AddTodo from './MyComponents/AddTodo';

import './App.css';
import reactDom from 'react-dom';

function MasterTodos() {

  const onDelete=(todo)=> {
      // Deleting this way will not work in reactDom
      // let index = todos.indexOf(todo);
      // todos.splice(index, 1);

      settodos(todos.filter((e)=>{
        return e!==todo;
                                }));

                         }
  const  addTodo=(title, desc)=>{
    console.log("I am adding toto", title, desc);
    let sno = todos[todos.length-1].sno+1;
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    console.log(...todos, mytodo);
    console.log(mytodo);

  }
  const [todos, settodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to ther market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the malla",
      desc: "You need to go to the  malla to bring milk"
    },
    {
      sno: 3,
      title: "Go to the raileay station",
      desc: "You need to go to the  railway statin to receive Aqsa"
    },
    {
      sno: 4,
      title: "Go to the Police station",
      desc: "You need to go to the  Police statin to to comaplian "
    },


  ]);
  




  return (
    <div style={{textAlign:"left"}}>
      
      {/* <Header title = "The IT Family Todos List" searchBar = {true} /> */}
      <AddTodo addTodo={addTodo}/>
      <Todos  todos = {todos} onDelete={onDelete} />
      {/* <Footer /> */}
    </div>
  )
}
export default MasterTodos;