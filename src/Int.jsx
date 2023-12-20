import React, { useState, useEffect } from 'react';

function Int({ onAdd }) {
  const [val, setVal] = useState('x');
  const [num, setNum] = useState(0);

  useEffect(() => {
    onAdd(`int ${val} = ${num};`);
  }, [val, num, onAdd]);

  return (
    <div>
      <p>
        int型の
        <input type="text" value={val} onChange={(e) => setVal(e.target.value)} size="1" />
        に
        <input type="text" value={num} onChange={(e) => setNum(e.target.value)} size="1" />
        を加える
      </p>
    </div>
  );
}

export default Int;
