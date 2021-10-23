import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import { useState } from 'react';

const App = () => {

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

  const addForm = () => {
    console.log('Clicked')
  }

  const submitTask = () => {
    console.log('Submit')
  }

  return (
    <div className="container">
      <Header addForm={addForm}/>
      <br />
      <Form submitTask={submitTask} />
      <Footer />
    </div>
  );
}

export default App;
