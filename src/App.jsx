import React, { useState } from 'react';
import Draggable from 'react-draggable';
import Int from './Int';

const App = () => {
  const [array, setArray] = useState([]);
  const [code, setCode] = useState([]);

  const onAdd = (item) => {
    setCode([...code, item]);
  };

  return (
    <div>
      <button onClick={() => setArray([...array, <Int key={array.length} onAdd={onAdd} />])}>変数(int)</button>
      <button onClick={() => setArray([...array, <Cout key={array.length} onAdd={onAdd} />])}>出力(cout)</button>

      <div>
        <h2>VScode</h2>
        {code.map((item, index) => (
          <div key={index}>
            {`int ${item.val} = ${item.num};`}
          </div>
        ))}
      </div>

      {array.map((item) => (
        <Draggable key={item.key}>
          <div>{item}</div>
        </Draggable>
      ))}

    </div>
  );
};

export default App;
