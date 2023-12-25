import React, { useState, useEffect } from 'react';

function Cout({ onAdd }) {
  const [val, setVal] = useState('x');

  useEffect(() => {
    onAdd(["cout", val], val);
  }, [val, onAdd]);

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
        Cout
        変数<input type="text" value={val} onChange={(e) => setVal(e.target.value)} size="1" />
        を出力する
      </h5>
    </div>
  );
}

export default Cout;
