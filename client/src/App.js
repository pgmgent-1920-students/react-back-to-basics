import React from 'react';
import logo from './logo.svg';
import './App.css';

import Message from './Message';
import Person from './Person';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message msg="Greetings Earthling. I am Borg!" createdAt={new Date().toUTCString()} />
        <Person fullName="Philippe" age={37} length={1.72} weight={66} />
        <Person fullName="Lester" age={5} length={1.08} weight={16.8}  />
        <Person fullName="Linus" age={37} length={1.27} weight={23}  />
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
