import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'

function App() {
  const [response, setResponse] = useState("Yet to fetch");
  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setResponse(data.data) )
      .then(() => console.log(response))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <h1>{response}</h1>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
