import React from 'react';

const Terminal = ({ sortedCode }) => {

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

  const renderCodeItem = (item, index, a) => {
    if (item[0] === "int" && /^-?\d+$/.test(item[1])) { // intかつ数値
      return (
        <div key={index}>
          エラー: 変数 {item[1]} が 数値 です！<br />
        </div>
      );
    }
    if (item[0] === "cout") { // 出力が宣言されてる場合
      const val = sortedCode.filter((c) => c[0] === "int" && c[1] === a); // それがいくつあるか

      if (val.length === 1) { // もしひとつあったら
        return renderCodeItem(item, index, val[0][2]); // 再帰する
      } else if (val.length > 1) { // もし複数定義されてたら
        return (
          <div key={index}>
            エラー: 変数 {a} が 複数 定義 されています！<br />
          </div>
        );
      } else if (/^-?\d+$/.test(a)) { // なかったら
        return (
          <div key={index}>
            {a}
          </div>
        );
      } else {
        return (
          <div key={index}>
            エラー: 変数 {a} が 定義 されてません！<br />
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div style={editorStyle}>
      <h2 style={{ color: '#569cd6' }}>Terminal</h2>
      <div style={codeStyle}>
        {sortedCode.map((item, index) => renderCodeItem(item, index, item[1]))}
      </div>
    </div>
  );
};

export default Terminal;
