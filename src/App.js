import Header from './Header';
import Form from './Form';
import ToDos from './ToDos';
import Footer from './Footer';
import { useState, useEffect } from 'react';

const App = () => {

  const [showAddToDo, setShowAddToDo] = useState(false)

  const [todos, setToDos] = useState([])

  useEffect(() =>{
    const getToDos = async () => {
      const toDosFromServer = await fetchToDos()
      setToDos(toDosFromServer)
    }
    getToDos()
  }, [])

  const fetchToDos = async() => {
    const res = await fetch('http://localhost:5000/todos')
    const data = await res.json()

    return data
  }

  const submitToDo = async (todo) => {
    const res = await fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    })

    const data = await res.json()

    setToDos([...todos, data])
  }

  const deleteToDo = async (id) => {
    await fetch(`http://localhost:5000/todos/${id}`, {method: 'DELETE'})

    setToDos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddToDo(!showAddToDo)}
      showAdd={showAddToDo}
      />

      {showAddToDo && <Form addToDo={submitToDo} />}

      {todos.length > 0 ? (<ToDos todos={todos} onDelete={deleteToDo} />) : ('No To-Dos to do...')}

      <Footer />
    </div>
  );
}

export default App;
