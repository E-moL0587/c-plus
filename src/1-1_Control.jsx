import React from 'react';
import Int  from './Functions/Int';
import Cout from './Functions/Cout';
import Calc from './Functions/Calc';
import Array from './Functions/Array';
import Begin from './Functions/Begin';
import Insert from './Functions/Insert';

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
    backgroundColor: '#6666aaaa',
    color: '#FFFFFF',
    margin: '2px',
  };

  const onAdd = (item, key) => {
    updateCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[key] = item;
      return newCode;
    });
  };

  const addInt = () => { const key = array.length; updateArray([...array, <Int key={key} onAdd={(item) => onAdd(item, key)} />]); };
  const addCout = () => { const key = array.length; updateArray([...array, <Cout key={key} onAdd={(item) => onAdd(item, key)} />]); };
  const addCalc = () => { const key = array.length; updateArray([...array, <Calc key={key} onAdd={(item) => onAdd(item, key)} />]); };
  const addArray = () => { const key = array.length; updateArray([...array, <Array key={key} onAdd={(item) => onAdd(item, key)} />]); };
  const addBegin = () => { const key = array.length; updateArray([...array, <Begin key={key} onAdd={(item) => onAdd(item, key)} />]); };
  const addInsert = () => { const key = array.length; updateArray([...array, <Insert key={key} onAdd={(item) => onAdd(item, key)} />]); };

  return (
    <div style={editorStyle}>
      <div style={codeStyle}>
        <h2 style={{ color: '#569cd6' }}>C-plus</h2>
        <button style={buttonStyle} onClick={addInt}>変数(int)</button>
        <button style={buttonStyle} onClick={addCout}>出力(cout)</button>
        <button style={buttonStyle} onClick={addCalc}>四則演算</button>
        <button style={buttonStyle} onClick={addArray}>動的配列(vector)</button>
        <button style={buttonStyle} onClick={addBegin}>イテレータ取得(begin, end)</button>
        <button style={buttonStyle} onClick={addInsert}>編集処理(insert, erase, replace)</button>
      </div>
    </div>
  );
};

export default Control;
