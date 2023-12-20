import React from 'react';

const Terminal = ({ sortedCode }) => {

  const editorStyle = {
    fontFamily: 'Consolas, monospace',
    backgroundColor: '#1e1e1e',
    color: '#d4d4d4',
    padding: '20px',
    borderRadius: '5px',
    maxWidth: '600px',
    margin: 'auto',
  };

  const codeStyle = {
    fontSize: '14px',
    lineHeight: '1.6',
  };

  return (
    <div style={editorStyle}>
      <h2 style={{ color: '#569cd6' }}>Terminal</h2>
      <div style={codeStyle}>
        {sortedCode.map((item, index) => {
          if (item[0] === "cout") {
            const val = sortedCode.filter((c) => c[0] === "int" && c[1] === item[1]);

            if (val.length === 1) {
              return (
                <div key={index}>
                  {val[0][2]}
                </div>
              );
            } else if (val.length > 1) {
              return (
                <div key={index}>
                  エラー: {item[1]} が複数、定義されています！<br />
                </div>
              );
            }
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Terminal;
