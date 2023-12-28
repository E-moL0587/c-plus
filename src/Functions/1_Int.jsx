import React, { useState, useEffect } from 'react';

function Int({ onAdd }) {
  const [val, setVal] = useState('x');
  const [num, setNum] = useState(0);

  useEffect(() => {
    onAdd(["int", val, num], val);
  }, [val, num, onAdd]);

  const editorStyle = {
    fontFamily: 'Consolas, monospace',
    backgroundColor: '#FF3D00',
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
        Int
        変数<input type="text" value={val} onChange={(e) => setVal(e.target.value)} size="1" />
        の宣言と初期値<input type="text" value={num} onChange={(e) => setNum(e.target.value)} size="1" />
        の指定をする
      </h5>
    </div>
  );
}

export default Int;
