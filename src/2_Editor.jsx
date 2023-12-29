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

  const valA = sortedCode.find((c) => c[0] === 'array');
  const valAElement = valA ? <div>{`#include<vector>`}</div> : null;

  return (
    <div style={editorStyle}>
      <h2 style={{ color: '#569cd6' }}>Editor</h2>
      <div style={codeStyle}>
        {`#include<iostream>`}<br />
        {valAElement}
        {`int main() {`}<br />
        {sortedCode.map((item, index) => {
          const valBI = sortedCode.filter((c) => (c[0] === 'begin' || c[0] === 'insert') && c[1] === item[1]);

          return (
            <div key={index} style={{ color: '#569cd6', paddingLeft: '1em' }}>
              {item[0] === 'int' ? `  ${item[0]} ${item[1]}{${item[2]}};` : ''}
              {item[0] === 'cout' ? `  std::${item[0]} << ${valBI.length ? '*' : ''}${item[1]};` : ''}
              {item[0] === 'calc' ? `  ${item[1]} ${item[3]}= ${item[2]};` : ''}
              {item[0] === 'array' ? `  std::vector<int> ${item[1]}{${item[2]}};` : ''}
              {item[0] === 'begin' ? `  auto ${item[1]} = ${item[2]}.${item[3]} ${item[4]};` : ''}
              {item[0] === 'insert' && item[4] === 'insert' ? `  ${item[1]}.${item[4]}(${item[1]}.begin() + ${item[2]}, ${item[3]});` : ''}
              {item[0] === 'insert' && item[4] === 'erase' ? `  ${item[1]}.${item[4]}(${item[1]}.begin() + ${item[2]});` : ''}
              {item[0] === 'insert' && item[4] === 'replace' ? `  ${item[1]}.${item[4]}(${item[1]}.begin() + ${item[2]}, 0, ${item[3]});` : ''}
            </div>
          );
        })}<br />
        <div style={{ paddingLeft: '1em' }}>{`  return 0;`}</div>
        {`}`}<br />
      </div>
    </div>
  );
};

export default Editor;
