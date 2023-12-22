import React from 'react';
import Int from './Functions/Int';
import Cout from './Functions/Cout';

const Control = ({ array, updateArray, updateCode }) => {

  const editorStyle = {
    fontFamily: 'Consolas, monospace',
    backgroundColor: '#1e1e1e',
    color: '#d4d4d4',
    padding: '20px',
    borderRadius: '20px',
  };

  const codeStyle = {
    fontSize: '14px',
    lineHeight: '1.6',
    margin: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#555555aa',
    color: '#FFFFFF',
    marginRight: '10px',
  };

  const onAdd = (item, key) => {
    updateCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[key] = item;
      return newCode;
    });
  };

  const addInt = () => {
    const key = array.length;
    updateArray([...array, <Int key={key} onAdd={(item) => onAdd(item, key)} />]);
  };

  const addCout = () => {
    const key = array.length;
    updateArray([...array, <Cout key={key} onAdd={(item) => onAdd(item, key)} />]);
  };

  return (
    <div style={editorStyle}>
      <div style={codeStyle}>
        <h2 style={{ color: '#569cd6' }}>C-plus</h2>
        <button style={buttonStyle} onClick={addInt}>変数(int)</button>
        <button style={buttonStyle} onClick={addCout}>出力(cout)</button>
      </div>
    </div>
  );
};

export default Control;
