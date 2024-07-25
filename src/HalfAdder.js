import React, { useState } from 'react';
import xorGate from './xor.png';
import andGate from './and.png';
import led from './off.png';

function HalfAdder() {
  const [supply, setSupply] = useState(false);
  const [inputA, setInputA] = useState(false);
  const [inputB, setInputB] = useState(false);
  const [truthTable, setTruthTable] = useState([]);
  const [showInstructions, setShowInstructions] = useState(false);

  const sum = supply && (inputA ^ inputB);
  const carry = supply && (inputA && inputB);

  const handleAdd = () => {
    setTruthTable([...truthTable, { inputA, inputB, sum, carry }]);
  };

  const handleReset = () => {
    setInputA(false);
    setInputB(false);
    setTruthTable([]);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="half-adder">
    <h2>Experiment to perform logic of half adder on kit</h2>
      <button className="instructions-button" onClick={() => setShowInstructions(true)}>Instructions</button>

      {showInstructions && (
        <div className="instructions-popup" onClick={() => setShowInstructions(false)}>
          <div className="instructions-content" onClick={(e) => e.stopPropagation()}>
            <h2>Instructions</h2>
            <ol>
              <li>Enter the Boolean input "A" and "B".</li>
              <li>Enter the Boolean output for your corresponding inputs.</li>
              <li>Click on "Circuit" button to check the circuit diagram for half adder.</li>
              <li>Click on "Check" Button to verify your output.</li>
              <li>Click "Print" if you want to get print out of Truth Table.</li>
              <li>Click on "Reset" button if you want to reset input and outputs.</li>
            </ol>
          </div>
        </div>
      )}

      <div className="circuit-row">
        <div className="switches">
          <button
            className={`circuit-button ${supply ? 'on' : 'off'}`}
            onClick={() => setSupply(!supply)}
          >
            Supply
          </button>

          <button
            className={`circuit-button ${inputA ? 'on' : 'off'}`}
            onClick={() => {
              if (supply) setInputA(!inputA);
              else alert('Please turn on the supply first');
            }}
          >
            Input A
          </button>

          <button
            className={`circuit-button ${inputB ? 'on' : 'off'}`}
            onClick={() => {
              if (supply) setInputB(!inputB);
              else alert('Please turn on the supply first');
            }}
          >
            Input B
          </button>
        </div>

        <div className="gates">
          <div style={{ textAlign: 'center' }}>
            <img src={xorGate} alt="XOR Gate" style={{ width: '200px', height: '200px' }} />
            <h6>7486(XOR GATE)</h6>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img src={andGate} alt="AND Gate" style={{ width: '200px', height: '200px' }} />
            <h6>7408(AND GATE)</h6>
          </div>
        </div>

        <div className="leds">
          <img src={led} className={sum ? 'led on' : 'led off'} alt="Sum LED" /><span>SUM</span>
          <img src={led} className={carry ? 'led on' : 'led off'} alt="Carry LED" /><span>CARRY</span>
        </div>
      </div>

      <div className="controls">
        <button onClick={handleAdd}>ADD</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handlePrint}>Print</button>
      </div>

      <div className="truth-table">
        <table>
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Input A</th>
              <th>Input B</th>
              <th>Sum</th>
              <th>Carry</th>
            </tr>
          </thead>
          <tbody>
            {truthTable.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.inputA ? 1 : 0}</td>
                <td>{entry.inputB ? 1 : 0}</td>
                <td>{entry.sum ? 1 : 0}</td>
                <td>{entry.carry ? 1 : 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HalfAdder;
