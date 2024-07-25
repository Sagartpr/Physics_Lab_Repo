
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="home">
      <h1>Construction of half/ full adder using XOR and NAND gates and verification of its operation
Simulation</h1>

      <Link to="/full-adder">
        <button>Full Adder</button>
      </Link>
      <Link to="/half-adder">
        <button>Half Adder</button>
      </Link>
    </div>
  );
}

export default Home;
