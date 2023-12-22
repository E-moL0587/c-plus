import React, { useState, useEffect } from 'react';

function Int({ onAdd }) {
  const [val, setVal] = useState('x');
  const [num, setNum] = useState(0);

  useEffect(() => {
    onAdd(["int", val, num], val);
  }, [val, num, onAdd]);

  const editorStyle = {
    fontFamily: 'Consolas, monospace',
    backgroundColor: '#1e1e1e',
    color: '#d4d4d4',
    borderRadius: '20px',
  };

  const codeStyle = {
    fontSize: '14px',
    lineHeight: '1.6',
    margin: '20px',
  };

  return (
    <div style={editorStyle}>
      <h5 style={codeStyle}>
        変数<input type="text" value={val} onChange={(e) => setVal(e.target.value)} size="1" />
        に<input type="text" value={num} onChange={(e) => setNum(e.target.value)} size="1" />
        を加える
      </h5>
    </div>
  );
}

export default Int;
