import React from 'react'
import ToDo from './ToDo'

const ToDos = ( {todos} ) => {
    return (
        <>
            {todos.map((todo) => (<ToDo 
            key={todo.id} 
            todo={todo}
            /> ))}
        </>
    )
}

export default ToDos
