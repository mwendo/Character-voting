import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './views/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './views/Footer';
import io from 'socket.io-client';


function App() {
  const [socket] = useState(() => io(":8000"))
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const onChangeHandler = e => {
    setInput(e.target.value);
  }

  const onSubmitHandler = e => {
    e.preventDefault();
    socket.emit('chat', input);
  }

  useEffect(() => {
    console.log("Is this thing on???");
    socket.on('post chat', msg => {
      setMessages(prevmsgs => {return [...prevmsgs, msg]})
    })
    return () => socket.disconnect(true);
  }, [socket])
  return (
    <div className="App">
      <div>
        <Header />
        <form onSubmit={onSubmitHandler}>
          <input type="text" name="msg" autoComplete="off" onChange={onChangeHandler}/>
          <input type="submit" value="Submit" />
        </form>
        {
          messages.map((item, i) => {
            return <h4 key={i}>{item}</h4>
          })
        }
      </div>
      <div>
        <footer>
        <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
