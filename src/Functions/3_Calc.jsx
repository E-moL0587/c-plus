import React, { useState, useEffect } from 'react';

function Calc({ onAdd }) {
  const [val, setVal] = useState('x');
  const [num, setNum] = useState(0);
  const [ope, setOpe] = useState('+')

  useEffect(() => {
    onAdd(["calc", val, num, ope], val);
  }, [val, num, ope, onAdd]);

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
        Calc
        変数<input type="text" value={val} onChange={(e) => setVal(e.target.value)} size="1" />
        に値<input type="text" value={num} onChange={(e) => setNum(e.target.value)} size="1" />
        を代入演算子
        <select value={ope} onChange={(e) => setOpe(e.target.value)}>
          <option value="+">＋</option>
          <option value="-">－</option>
          <option value="*">＊</option>
          <option value="/">／</option>
        </select>
        で更新する
      </h5>
    </div>
  );
}

export default Calc;
