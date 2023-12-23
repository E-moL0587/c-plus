import React from 'react';

const Editor = ({ sortedCode }) => {

  const editorStyle = {
    fontFamily: 'Consolas, monospace',
    backgroundColor: '#1e1e1e',
    color: '#d4d4d4',
    padding: '20px',
    borderRadius: '20px',
  };

  const codeStyle = {
    fontSize: '14px',
    lineHeight: '1.6',
    margin: '20px',
  };

  return (
    <div style={editorStyle}>
      <h2 style={{ color: '#569cd6' }}>Editor</h2>
      <div style={codeStyle}>
        {`#include<iostream>`}<br />
        {`int main() {`}<br />
        {sortedCode.map((item, index) => (
          <div key={index} style={{ color: '#569cd6' }}>
            {item[0] === 'int' ? `　${item[0]} ${item[1]} = ${item[2]};` : ''}
            {item[0] === 'cout' ? `　std::${item[0]} << ${item[1]};` : ''}
            {item[0] === 'calc' ? `　${item[1]} = ${item[1]} ${item[3]} ${item[2]};` : ''}
            {item[0] === 'array' ? `　std::vector<int> ${item[1]}{${item[2]}};` : ''}
            {item[0] === 'begin' ? `　auto ${item[1]} = ${item[2]}.${item[4]} ${item[3]};` : ''}
          </div>
        ))}<br />
        {`　return 0;`}<br />
        {`}`}<br />
      </div>
    </div>
  );
};

export default Editor;
