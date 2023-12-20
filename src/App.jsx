import React, { useState } from 'react';
import Draggable from 'react-draggable';
import Int from './Int';
import Cout from './Cout';
import Editor from './Editor';
import Terminal from './Terminal';

const App = () => {
  const [array, setArray] = useState([]);
  const [code, setCode] = useState([]);

  const onAdd = (item, key) => {
    setCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[key] = item;
      return newCode;
    });
  };

  const onDrag = (ui, key) => {
    const WindowY = (ui.y / window.innerHeight) * 100;

    setCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[key] = { ...newCode[key], y: WindowY };
      return newCode;
    });
  };

  const sortedCode = [...code].sort((a, b) => a.y - b.y);

  const addInt = () => {
    const key = array.length;
    setArray([...array, <Int key={key} onAdd={(item) => onAdd(item, key)} />]);
  };

  const addCout = () => {
    const key = array.length;
    setArray([...array, <Cout key={key} onAdd={(item) => onAdd(item, key)} />]);
  };

  return (
    <div>
      <h2>C-plus</h2>
      <button onClick={addInt}>変数(int)</button>
      <button onClick={addCout}>出力(cout)</button>

      <div style={{ position: 'fixed', left: '50%', top: 0 }}>
        <Editor sortedCode={sortedCode} />
        <Terminal sortedCode={sortedCode} />
      </div>

      {array.map((item, index) => (
        <Draggable key={index} onDrag={(ui) => onDrag(ui, index)}>
          <div style={{ position: 'absolute' }}>{item}</div>
        </Draggable>
      ))}
    </div>
  );
};

export default App;
