import React from 'react'

const ToDo = ( {todo} ) => {
    return (
        <div className="to-do">
          <h4>{todo.content}</h4>
          <p>{todo.dueDate}</p>  
        </div>
    )
}

export default ToDo
