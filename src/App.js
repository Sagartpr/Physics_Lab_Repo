
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FullAdder from './FullAdder';
import HalfAdder from './HalfAdder';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/full-adder" element={<FullAdder />} />
          <Route path="/half-adder" element={<HalfAdder />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Adder Circuit Simulator</h1>
      <Link to="/full-adder">
        <button>Full Adder</button>
      </Link>
      <Link to="/half-adder">
        <button>Half Adder</button>
      </Link>
    </div>
  );
}

export default App;
