import './App.css';
import React, {useState, useEffect} from 'react';
import {Router} from '@reach/router';
import Header from './views/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './views/Footer';
import io from 'socket.io-client';
import AddCharacter from './views/AddCharacter';


function App() {
  const [socket] = useState(() => io(":8000"))
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  return (
    <div className="App">
      <Header />
      <Footer />
      <Router>
        <AddCharacter path='/add'/>
      </Router>
    </div>
  );
}

export default App;