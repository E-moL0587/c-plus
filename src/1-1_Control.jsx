import React from 'react';
import Int from './Functions/Int';
import Cout from './Functions/Cout';

const Control = ({ array, updateArray, updateCode }) => {
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
    <div>
      <h2>C-plus</h2>
      <h4>変数に変数と同じ値を入れたら、再帰して動かなくなります。</h4>
      <button onClick={addInt}>変数(int)</button>
      <button onClick={addCout}>出力(cout)</button>
    </div>
  );
};

export default Control;
