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

    if (item[0] === "int" && /^-?\d+$/.test(item[1])) {
      return (<div key={index}>エラー: 変数名 {item[1]} が 数値 です！</div>);
    }

    if (item[0] === "cout") {
      let j = null;
      let k = null;

      const Begin = sortedCode.filter((c) => c[0] === "begin" && c[1] === a);
      if (Begin.length === 1) {
        j = Begin[0][2];
      }

      const Insert = sortedCode.filter((c) => c[0] === "insert" && c[1] === a);
      if (Insert.length === 1) {
        k = Insert[0][3];
      }

      const Array = sortedCode.filter((c) => c[0] === "array" && c[1] === j);
      const Int = sortedCode.filter((c) => c[0] === "int" && c[1] === a);
      const Calc = sortedCode.filter((c) => c[0] === "calc" && c[1] === a);
      const Array2 = sortedCode.filter((c) => c[0] === "array" && c[1] === a);

      const len = Int.length + Begin.length + Array2.length;

      if (/^-?\d+$/.test(a)) {
        if (parseInt(updatedB) === parseFloat(updatedB)) {
          return (<div key={index}>{parseInt(updatedB)}</div>);
        } else {
          return (<div key={index}>{parseInt(updatedB)} ({parseFloat(updatedB).toFixed(5)}...)</div>);
        }
      }

      if (len > 1) return (<div key={index}>エラー: 変数 {a} が 複数 定義 されています！</div>);
      if (len === 0) return (<div key={index}>エラー: 変数 {a} が 定義 されてません！</div>);

      if (Array.length !== 1 && Begin.length === 1) {
        return (<div key={index}>エラー: 配列 {Begin[0][2].split(',')[Begin[0][4]]} が 定義 されていません！</div>);
      }

      if (Int.length === 1) {
        if (/^-?\d+$/.test(Int[0][2])) {
          updatedB += parseFloat(Int[0][2]);

          for (let i = 0; i < Calc.length; i++) {
            const valueToAdd = parseFloat(Calc[i][2]);
            if (Calc[i][3] === "+") { updatedB += valueToAdd; }
            else if (Calc[i][3] === "-") { updatedB -= valueToAdd; }
            else if (Calc[i][3] === "*") { updatedB *= valueToAdd; }
            else if (Calc[i][3] === "/") { updatedB /= valueToAdd; }
          }
        }
        return renderCodeItem(item, index, Int[0][2], updatedB);
      }

      if (Array.length === 1 && Begin.length === 1) {
        const aaa = Array[0][2].split(',');
        if (Begin[0][3] === "begin() +") {
          return (<div key={index}>{aaa[Begin[0][4]]}</div>);
        } else {
          return (<div key={index}>{aaa[aaa.length - Begin[0][4]]}</div>);
        }
      }

      if (Array2.length === 1 && Insert.length === 1) {
        const aaa = Array2[0][2].split(',');

        if (/^-?\d+$/.test(Insert[0][3])) {
          if (Insert[0][4] === "insert") {
            aaa.splice(Insert[0][2], 0, Insert[0][3]);
          } else if (Insert[0][4] === "erase") {
            aaa.splice(Insert[0][2], 1);
          } else {
            aaa.splice(Insert[0][2], 1, Insert[0][3]);
          }
          const bbb = aaa.join(',');
          return (<div key={index}>[{bbb}]</div>);
        } else {
          const Int2 = sortedCode.filter((c) => c[0] === "int" && c[1] === k);
          const int2Value = Int2.length > 0 ? Int2[0][2] : null;
          const aaa = Array2[0][2].split(',');

          if (/^-?\d+$/.test(int2Value)) {
            if (Insert[0][4] === "insert") {
              aaa.splice(Insert[0][2], 0, Int2[0][2]);
            } else if (Insert[0][4] === "erase") {
              aaa.splice(Insert[0][2], 1);
            } else {
              aaa.splice(Insert[0][2], 1, Int2[0][2]);
            }
            const bbb = aaa.join(',');
            return (<div key={index}>[{bbb}]</div>);
          }
        }
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
