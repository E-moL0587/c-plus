import React, { useState } from 'react';
import Int from './Int.jsx';

const App = () => {
  const [array, setArray] = useState([]);

  const handleButtonClick = (char) => {
    setArray((prevArray) => [...prevArray, char]);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick('int x = 0;')}>変数(int)</button>
      <button onClick={() => handleButtonClick('std::cin >> x;')}>入力(cin)</button>
      <button onClick={() => handleButtonClick('std::cout << x;')}>出力(cout)</button>

      <Int />

      {array.map((item, index) => (<div key={index}>{item}</div>))}
    </div>
  );
};

export default App;
