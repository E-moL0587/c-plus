import React, { useState, useEffect } from 'react';

function Array({ onAdd }) {
  const [a, setA] = useState('v');
  const [b, setB] = useState('0,1,2');

  useEffect(() => {
    onAdd(["array", a, b], a);
  }, [a, b, onAdd]);

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
        変数<input type="text" value={a} onChange={(e) => setA(e.target.value)} size="1" />
        の宣言と初期配列<input type="text" value={b} onChange={(e) => setB(e.target.value)} size="3" />
        の指定をする
      </h5>
    </div>
  );
}

export default Array;
