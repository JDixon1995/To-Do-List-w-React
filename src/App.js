import Header from './Header';
import Form from './Form';
import ToDos from './ToDos';
import Footer from './Footer';
import { useState } from 'react';

const App = () => {

  const [showAddToDo, setShowAddToDo] = useState(false)

  const [todos, setToDos] = useState([
    {
      id: 1,
      content: 'Wash car.',
      dueDate: 'Nov. 12th',
    },
    {
      id: 2,
      content: 'Attend class',
      dueDate: 'Nov. 15th',
    },
    {
      id: 3,
      content: 'Get Groceries.',
      dueDate: 'Nov. 10th.',
    }
  ])

  const submitToDo = (todo) => {
    const id = Math.floor(Math.random() * 1000 + 1)
    const newToDo = { id, ...todo }
    setToDos([...todos, newToDo])
  }

  const deleteToDo = (id) => {
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
