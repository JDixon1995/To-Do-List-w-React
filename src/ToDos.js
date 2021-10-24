import React from 'react'

const ToDos = ( {todos} ) => {
    return (
        <>
            {todos.map((todo) => (
            <h3>{todo.content}</h3>
            ))}
        </>
    )
}

export default ToDos
