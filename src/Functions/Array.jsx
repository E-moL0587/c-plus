import React, { useState, useEffect } from 'react';

function Array({ onAdd }) {
  const [val, setVal] = useState('v');
  const [num, setNum] = useState([0,1,2]);

  useEffect(() => {
    onAdd(["array", val, num], val);
  }, [val, num, onAdd]);

  const editorStyle = {
    fontFamily: 'Consolas, monospace',
    backgroundColor: '#1e1e1e',
    color: '#d4d4d4',
  };

  const codeStyle = {
    fontSize: '14px',
    lineHeight: '1.6',
    margin: '20px',
  };

  return (
    <div style={editorStyle}>
      <h5 style={codeStyle}>
        Array
        配列<input type="text" value={val} onChange={(e) => setVal(e.target.value)} size="1" />
        に値<input type="text" value={num} onChange={(e) => setNum(e.target.value)} size="1" />
        で定義する
      </h5>
    </div>
  );
}

export default Array;
