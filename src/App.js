import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import Button from './Button';
import { useState } from 'react';

const App = () => {

  const [todos, setToDos] = useState([])



  return (
    <div className="container">
      <Header />
      <br />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
