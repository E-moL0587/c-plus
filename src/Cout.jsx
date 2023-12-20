import React, { useState, useEffect } from 'react';

function Int({ onAdd }) {
  const [val, setVal] = useState('x');

  useEffect(() => {
    onAdd(`std::cout << ${val};`);
  }, [val, onAdd]);

  return (
    <div>
      <p>
        変数
        <input type="text" value={val} onChange={(e) => setVal(e.target.value)} size="1" />
        を出力する
      </p>
    </div>
  );
}

export default Int;
