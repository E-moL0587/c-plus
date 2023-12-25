import React, { useState, useEffect } from 'react';

function Insert({ onAdd }) {
  const [a, setA] = useState('x');
  const [b, setB] = useState('v');
  const [c, setC] = useState(0);
  const [d, setD] = useState(3);
  const [e, setE] = useState('insert');

  useEffect(() => {
    onAdd(["insert", a, b, c, d, e], a);
  }, [a, b, c, d, e, onAdd]);

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
        Insert
        配列<input type="text" value={b} onChange={(e) => setB(e.target.value)} size="1" />
        の<input type="text" value={c} onChange={(e) => setC(e.target.value)} size="1" />
        番目の位置
        
        {e !== "erase" ? (
          <>
            に値<input type="text" value={d} onChange={(e) => setD(e.target.value)} size="1" />
            を
          </>
        ):(
          <>の値を</>
        )}

        <select value={e} onChange={(e) => setE(e.target.value)}>
          <option value="insert">挿入</option>
          <option value="erase">削除</option>
          <option value="replace">置換</option>
        </select>
        する
      </h5>
    </div>
  );
}

export default Insert;
