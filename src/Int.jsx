import React, { useState } from 'react';

function Int() {
  const [value, setValue] = useState('x');
  const [num, setNum] = useState(1);

  return (
    <div>
      <p>int型の{value}に{num}を加える</p>
    </div>
  );
}

export default Int;
