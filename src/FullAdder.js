import React, { useState } from 'react';
import xorGate from './xor.png';
import andGate from './and.png';
import led from './off.png';
import orGate from './or.png';

function FullAdder() {
    const [supply, setSupply] = useState(false);
    const [inputA, setInputA] = useState(false);
    const [inputB, setInputB] = useState(false);
    const [Cin, setCin] = useState(false);
    const [truthTable, setTruthTable] = useState([]);
    const [showInstructions, setShowInstructions] = useState(false);

    const sum = supply && ((inputA ^ inputB) ^ Cin);
    const carry = supply && ((inputA && inputB) || (inputB && Cin) || (inputA && Cin));

    const handleAdd = () => {
        setTruthTable([...truthTable, { inputA, inputB, Cin, sum, carry }]);
    };

    const handleReset = () => {
        setInputA(false);
        setInputB(false);
        setCin(false);
        setTruthTable([]);
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="half-adder">
            <h2>Experiment to perform logic of full adder on kit</h2>
            <button className="instructions-button" onClick={() => setShowInstructions(true)}>Instructions</button>

            {showInstructions && (
                <div className="instructions-popup" onClick={() => setShowInstructions(false)}>
                    <div className="instructions-content" onClick={(e) => e.stopPropagation()}>
                        <ol>
                            <li>Connect the Supply(+5V) to the IC.</li>
                            <li>Press the switches for inputs "A" and "B", and "Cin" (Carry input).</li>
                                <li> The switch in ON state is green and the switch in OFF state is red.</li>
                            <li>The SUM LED glows if any one switch is ON out of both the switches else it won't glow.</li>
                                 <li> Carry OUT LED glows if both switches are in the same state, else it will remain OFF in other 3 states.</li>
                            <li>Press "ADD" button to add your inputs and outputs in the given table.</li>
                            <li>Repeat steps 3 & 4 for the next state of inputs and their corresponding outputs.</li>
                            <li>Press the "PRINT" button after completing your simulation to get your results.</li>
                            <li>Press the "RESET" button whenever you want to refresh your simulator.</li>
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
                    <button
                        className={`circuit-button ${Cin ? 'on' : 'off'}`}
                        onClick={() => {
                            if (supply) setCin(!Cin);
                            else alert('Please turn on the supply first');
                        }}
                    >
                        C<sub>in</sub>
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
                    <div style={{ textAlign: 'center' }}>
                        <img src={orGate} alt="OR Gate" style={{ width: '200px', height: '170px' }} />
                        <h6 style={{ marginTop: '15px' }}>7432(OR GATE)</h6>
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
                            <th>C<sub>in</sub></th>
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
                                <td>{entry.Cin ? 1 : 0}</td>
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

export default FullAdder;
