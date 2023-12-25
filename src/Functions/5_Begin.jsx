import React, { useState, useEffect } from 'react';

function Begin({ onAdd }) {
  const [a, setA] = useState('x');
  const [b, setB] = useState('v');
  const [c, setC] = useState('begin() +');
  const [d, setD] = useState(0);

  useEffect(() => {
    onAdd(["begin", a, b, c, d], a);
  }, [a, b, c, d, onAdd]);

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
        Begin
        変数<input type="text" value={a} onChange={(e) => setA(e.target.value)} size="1" />
        が配列<input type="text" value={b} onChange={(e) => setB(e.target.value)} size="1" />
        の
        <select value={c} onChange={(e) => setC(e.target.value)}>
          <option value="begin() +">前</option>
          <option value="end() -">後</option>
        </select>
        から<input type="text" value={d} onChange={(e) => setD(e.target.value)} size="1" />
        番目の要素を取得する
      </h5>
    </div>
  );
}

export default Begin;