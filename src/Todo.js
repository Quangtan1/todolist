import React, { useState } from 'react'
import { Modal } from '@material-ui/core'
import db from './firebase';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo(props) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set({
      todo: input
    },{ merge: true});
    setOpen(false);
  }
  const handleChange = e => {
    setInput(e.target.value);
};
  
  const handleOpen = e => {
    setOpen(true);
  };
  const handleClose = e => {
    setOpen(false);
  };

  const removeTodo = e => {
    db.collection('todos').doc(props.todo.id).delete()
  }
  
  return (
    <>
    <Modal
    open={open}
    onClose={handleClose}
    disablePortal
  disableEnforceFocus
  disableAutoFocus
  aria-labelledby="server-modal-title"
  aria-describedby="server-modal-description"
  >
      <div className='style-table'>
        <h4>Update</h4>
        <input placeholder={props.todo.todo} value={input} onChange={handleChange}/>
        <button onClick={updateTodo}>Update</button>
      </div>
    </Modal>
    <div className='todo-row'>      
            <div>
            {props.todo.todo} 
            </div>
            <div className='icons'>
            <TiEdit className='edit-icon' onClick={handleOpen}/>
            <RiCloseCircleLine className='delete-icon' onClick={removeTodo}/>
            </div>
        </div>
    </>
  )
}

export default Todo
