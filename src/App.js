import './App.css';
import React, { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

function App() {
  const [todos,setTodos] = useState([]);
  const [input, setInput] = useState('');

  //when the app leads,we need to listen to the database and fetch new todos as they get added/removed

  useEffect(() => {
    //this code here...fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc => ({id: doc.id , todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //setTodos([...todos,input]);
    setInput('');
  }

  const handleChange = e => {
    setInput(e.target.value);
};

  return (
    <div >
      <h1 className='text_center'>What's the plan today ?</h1>
      <div className='todo-app'>
      {/* <h1>What's your plan Today?</h1>
      <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <Input value={input} onChange={handleChange} />
      </FormControl>
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        AddTodo
      </Button> */}
      
      <form className='todo-form' onSubmit={addTodo}>
        <input
         type='text' 
         placeholder='Add a todo'
         value={input}
         name='text'
         className = 'todo-input'
         onChange={handleChange}
        />
        <button disabled={!input} className='todo-button'>Add todo</button>
      </form>
      <div>
      {todos.map(todo => (
          <Todo todo={todo}/>
          // <li>{todo}</li>
          ))}
      </div>
    </div>
    </div>
  );
}

export default App;







