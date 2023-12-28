import React, { useState } from 'react';
import Control from './1-1_Control';
import CodeItem from './1-2_CodeItem';
import Editor from './2_Editor';
import Terminal from './3_Terminal';

const App = () => {
  const [array, setArray] = useState([]);
  const [code, setCode] = useState([]);
  const [h, setH] = useState([]);

  const updateArray = (array) => {
    setArray(array);
  };

  const updateCode = (code) => {
    setCode(code);
  };

  const onDrag = (ui, key) => {
    const WindowY = (ui.y / window.innerHeight) * 100;

    setH((prevH) => {
      const newH = [...prevH];
      newH[key] = WindowY;
      return newH;
    });
  };

  const sortedCode = code.map((item, index) => ({ ...item, y: h[index] }));

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ zIndex: 2, flex: '1', position: 'relative' }}>
        <Control array={array} updateArray={updateArray} updateCode={updateCode} />

        {array.map((item, index) => (
          <CodeItem key={index} item={item} index={index} onDrag={(ui) => onDrag(ui, index)} />
        ))}
      </div>

      <div style={{ zIndex: 1, flex: '1', position: 'relative' }}>
        <Editor sortedCode={sortedCode.sort((a, b) => a.y - b.y)} />
        <Terminal sortedCode={sortedCode} />
      </div>
    </div>
  );
};

export default App;
