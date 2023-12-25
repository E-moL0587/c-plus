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

  const renderCodeItem = (item, index, a, b) => {
    let updatedB = b;

    if (item[0] === "int" && /^-?\d+$/.test(item[1])) { // intかつ数値なら
      return (
        <div key={index}>エラー: 変数 {item[1]} が 数値 です！<br /></div>
      );
    }

    if (item[0] === "cout") { // 出力が宣言されてる場合
      let j = "jjj";
      const valB = sortedCode.filter((c) => c[0] === "begin" && c[1] === a);
      if (valB.length === 1) { j = valB[0][2]; }

      const valI = sortedCode.filter((c) => c[0] === "insert" && c[1] === a);
      if (valI.length === 1) { j = valI[0][2]; }

      const valA = sortedCode.filter((c) => c[0] === "array" && c[1] === j);

      if (valA.length === 1 && valI.length === 1) {
        const aaa = valA[0][2].split(',');
        if (valI[0][4] === "insert") {
          aaa.splice(valI[0][3], 0, valI[0][5]);
        } else if (valI[0][4] === "erase") {
          aaa.splice(valI[0][3], 1);
        } else {
          aaa.splice(valI[0][3], 1, valI[0][5]);
        }
        const bbb = aaa.join(',');
        return (
          <div key={index}>[{bbb}]</div>
        );
      }




      if (valA.length !== 1 && valB.length === 1) {
        return (
          <div key={index}>エラー: 配列 {valB[0][2].split(',')[valB[0][3]]} が 定義 されていません！<br /></div>
        );
      }

      if (valA.length === 1 && valB.length === 1) {
        const aaa = valA[0][2].split(',');
        if (valB[0][4] === "begin() +") {
          return (
            <div key={index}>{aaa[valB[0][3]]}</div>
          );
        } else {
          return (
            <div key={index}>{aaa[aaa.length - valB[0][3]]}</div>
          );
        }
      }



      const val = sortedCode.filter((c) => c[0] === "int" && c[1] === a); // 指定変数がいくつあるか
      const valC = sortedCode.filter((c) => c[0] === "calc" && c[1] === a);

      if (val.length === 1) { // もしひとつあったら
        updatedB += parseFloat(val[0][2]);
        for (let i = 0; i < valC.length; i++) {
          const valueToAdd = parseFloat(valC[i][2]);
          if (valC[i][3] === "+") {
            updatedB += valueToAdd;
          } else if (valC[i][3] === "-") {
            updatedB -= valueToAdd;
          } else if (valC[i][3] === "*") {
            updatedB *= valueToAdd;
          } else if (valC[i][3] === "/") {
            updatedB /= valueToAdd;
          }
        }
        return renderCodeItem(item, index, val[0][2], updatedB); // 再帰する
      } else if (val.length > 1) { // もし複数定義されてたら
        return (
          <div key={index}>エラー: 変数 {a} が 複数 定義 されています！<br /></div>
        );
      } else if (/^-?\d+$/.test(a)) { // なかったら
        if (parseInt(updatedB) === parseFloat(updatedB)) {
          return (
            <div key={index}>
              {parseInt(updatedB)}
            </div>
          );
        } else {
          return (
            <div key={index}>
              {parseInt(updatedB)} ({parseFloat(updatedB).toFixed(5)}...)
            </div>
          );
        }
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
        {sortedCode.map((item, index) => renderCodeItem(item, index, item[1], 0))}
      </div>
    </div>
  );
};

export default Terminal;
