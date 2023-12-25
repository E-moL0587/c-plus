import React, { useState, useEffect } from 'react';

function Insert({ onAdd }) {
  const [a, setA] = useState('x');
  const [b, setB] = useState('v');
  const [c, setC] = useState(0);
  const [d, setD] = useState('insert');
  const [e, setE] = useState(3);

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
        変数<input type="text" value={a} onChange={(e) => setA(e.target.value)} size="1" />
        が配列<input type="text" value={b} onChange={(e) => setB(e.target.value)} size="1" />
        の<input type="text" value={c} onChange={(e) => setC(e.target.value)} size="1" />
        番目
        
        {d !== "erase" && (
          <>
            に値
            <input type="text" value={e} onChange={(e) => setE(e.target.value)} size="1" />
          </>
        )}

        を
        <select value={d} onChange={(e) => setD(e.target.value)}>
          <option value="insert">挿入</option>
          <option value="erase">削除</option>
          <option value="replace">置換</option>
        </select>
        し取得する
      </h5>
    </div>
  );
}

export default Insert;
