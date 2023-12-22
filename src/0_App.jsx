import React, { useState } from 'react';
import Control  from './1-1_Control';
import CodeItem from './1-2_CodeItem';
import Editor   from './2_Editor';
import Terminal from './3_Terminal';

const App = () => {
  const [array, setArray] = useState([]);
  const [code, setCode] = useState([]);

  const updateArray = (array) => { setArray(array); };
  const updateCode = (code) => { setCode(code); };

  const onDrag = (ui, key) => {
    const WindowY = (ui.y / window.innerHeight) * 100;

    setCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[key] = { ...newCode[key], y: WindowY };
      return newCode;
    });
  };

  const sortedCode = [...code].sort((a, b) => a.y - b.y);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1', position: 'relative' }}>
        <Control array={array} updateArray={updateArray} updateCode={updateCode} />

        {array.map((item, index) => (
          <CodeItem key={index} item={item} index={index} onDrag={onDrag} />
        ))}
      </div>

      <div style={{ flex: '1', position: 'relative' }}>
        <Editor sortedCode={sortedCode} />
        <Terminal sortedCode={sortedCode} />
      </div>
    </div>
  );
};

export default App;
