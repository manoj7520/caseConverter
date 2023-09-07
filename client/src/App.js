import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import NAVBAR from './navbar';
import BODY from './body';

function App() {
  return (
    <div className="App">
     <NAVBAR/>
     <BODY/>
    </div>
  );
}

export default App;
