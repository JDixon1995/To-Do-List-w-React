import React from 'react'
import { FaTimes } from 'react-icons/fa';

const ToDo = ( {todo, onDelete} ) => {
    return (
        <div className="to-do">
          <h4>{todo.content}
          <FaTimes 
          style={{ color: 'red' }}
          onClick={() => onDelete(todo.id)} />
          </h4>
          <p>{todo.dueDate}</p>  
        </div>
    )
}

export default ToDo
