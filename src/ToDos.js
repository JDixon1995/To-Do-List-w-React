import React from 'react'
import ToDo from './ToDo'

const ToDos = ( {todos, onDelete} ) => {
    return (
        <>
            {todos.map((todo) => (<ToDo 
            key={todo.id} 
            todo={todo}
            onDelete={onDelete}
            /> ))}
        </>
    )
}

export default ToDos
