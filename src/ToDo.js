import React from 'react'
import { FaTimes } from 'react-icons/fa';

const ToDo = ( {todo} ) => {
    return (
        <div className="to-do">
          <h4>{todo.content}
          <FaTimes style={{ color: 'red' }} />
          </h4>
          <p>{todo.dueDate}</p>  
        </div>
    )
}

export default ToDo
