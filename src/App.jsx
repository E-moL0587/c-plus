import React, { useState } from 'react';
import Draggable from 'react-draggable';
import Int from './Int';
import Cout from './Cout';

const App = () => {
  const [array, setArray] = useState([]);
  const [code, setCode] = useState([]);

  const onAdd = (item, key) => {
    setCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[key] = item;
      return newCode;
    });
  };

  const onDrag = (ui, key) => {
    const WindowY = (ui.y / window.innerHeight) * 100;

    setCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[key] = { ...newCode[key], y: WindowY };
      return newCode;
    });
  };

  const addInt = () => {
    const key = array.length;
    setArray([...array, <Int key={key} onAdd={(item) => onAdd(item, key)} />]);
  };

  const addCout = () => {
    const key = array.length;
    setArray([...array, <Cout key={key} onAdd={(item) => onAdd(item, key)} />]);
  };

  const sortedCode = [...code].sort((a, b) => a.y - b.y);

  return (
    <div>
      <button onClick={addInt}>変数(int)</button>
      <button onClick={addCout}>出力(cout)</button>

      <div>
        <h2>Editor</h2>
        {`#include<iostream>`}<br />
        {`int main() {`}
        <div>
          {sortedCode.map((item, index) => (
            <div key={index}>
              {item[0] === "int" ? `　${item[0]} ${item[1]} = ${item[2]};` : ""}
              {item[0] === "cout" ? `　std::${item[0]} << ${item[1]};` : ""}
            </div>
          ))}
          {`　return 0;`}
        </div>
        {`}`}
      </div>

      <div>
        <h2>Terminal</h2>
        {sortedCode.map((item, index) => {
          if (item[0] === "cout") {
            const val = code.filter((c) => c[0] === "int" && c[1] === item[1]);

            if (val.length === 1) {
              return (
                <div key={index}>
                  {val[0][2]}
                </div>
              );
            } else if (val.length > 1) {
              return (
                <div key={index}>
                  エラー: 変数 {item[1]} が複数、定義されています！<br />
                </div>
              );
            }

          }
          return null;
        })}
      </div>

      {array.map((item, index) => (
        <Draggable key={index} onDrag={(ui) => onDrag(ui, index)}>
          <div style={{ position: 'absolute' }}>{item}</div>
        </Draggable>
      ))}
    </div>
  );
};

export default App;
