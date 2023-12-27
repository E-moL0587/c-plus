import React, { useState, useEffect } from 'react';

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

  // 0      1       2          3       4          5
  // int    xに     0宣言
  // cout   xを出力
  // calc   xに     0          +する
  // array  vに    [0,1,2]宣言
  // begin  xに     vの        先頭から 0番目取得
  // insert xに     vの        0番目に  3を       挿入

  const renderCodeItem = (item, index) => {
    const [num, setNum] = useState([]);

    useEffect(() => {
      const val = sortedCode.filter((c) => c[0] === "int" && c[1] === item[1]);
      setNum([...num, val[0][2]]);
    }, [num]);

    return (
      <div key={index}>{num}</div>
    );
  }

  // const renderCodeItem = (item, index, a, b) => {
  //   let updatedB = b;

  //   // 番目の位置、出力結果の訂正

  //   if (item[0] === "int" && /^-?\d+$/.test(item[1])) { // intかつ数値なら
  //     return (
  //       <div key={index}>エラー: 変数 {item[1]} が 数値 です！<br /></div>
  //     );
  //   }

  //   if (item[0] === "cout") { // 出力が宣言されてる場合
  //     let j = "jjj";
  //     const valB = sortedCode.filter((c) => c[0] === "begin" && c[1] === a);
  //     if (valB.length === 1) { j = valB[0][2]; }

  //     const valI = sortedCode.filter((c) => c[0] === "insert" && c[1] === a);
  //     if (valI.length === 1) { j = valI[0][2]; }

  //     const valA = sortedCode.filter((c) => c[0] === "array" && c[1] === j);

  //     if (valA.length === 1 && valI.length === 1) {
  //       const aaa = valA[0][2].split(',');
  //       if (valI[0][5] === "insert") {
  //         aaa.splice(valI[0][3], 0, valI[0][4]);
  //       } else if (valI[0][5] === "erase") {
  //         aaa.splice(valI[0][3], 1);
  //       } else {
  //         aaa.splice(valI[0][3], 1, valI[0][4]);
  //       }
  //       const bbb = aaa.join(',');
  //       return (
  //         <div key={index}>[{bbb}]</div>
  //       );
  //     }




  //     if (valA.length !== 1 && valB.length === 1) {
  //       return (
  //         <div key={index}>エラー: 配列 {valB[0][2].split(',')[valB[0][4]]} が 定義 されていません！<br /></div>
  //       );
  //     }

  //     if (valA.length === 1 && valB.length === 1) {
  //       const aaa = valA[0][2].split(',');
  //       if (valB[0][3] === "begin() +") {
  //         return (
  //           <div key={index}>{aaa[valB[0][4]]}</div>
  //         );
  //       } else {
  //         return (
  //           <div key={index}>{aaa[aaa.length - valB[0][4]]}</div>
  //         );
  //       }
  //     }



  //     const val = sortedCode.filter((c) => c[0] === "int" && c[1] === a); // 指定変数がいくつあるか
  //     const valC = sortedCode.filter((c) => c[0] === "calc" && c[1] === a);

  //     if (val.length === 1) { // もしひとつあったら
  //       updatedB += parseFloat(val[0][2]);
  //       for (let i = 0; i < valC.length; i++) {
  //         const valueToAdd = parseFloat(valC[i][2]);
  //         if (valC[i][3] === "+") {
  //           updatedB += valueToAdd;
  //         } else if (valC[i][3] === "-") {
  //           updatedB -= valueToAdd;
  //         } else if (valC[i][3] === "*") {
  //           updatedB *= valueToAdd;
  //         } else if (valC[i][3] === "/") {
  //           updatedB /= valueToAdd;
  //         }
  //       }
  //       return renderCodeItem(item, index, val[0][2], updatedB); // 再帰する
  //     } else if (val.length > 1) { // もし複数定義されてたら
  //       return (
  //         <div key={index}>エラー: 変数 {a} が 複数 定義 されています！<br /></div>
  //       );
  //     } else if (/^-?\d+$/.test(a)) { // なかったら
  //       if (parseInt(updatedB) === parseFloat(updatedB)) {
  //         return (
  //           <div key={index}>
  //             {parseInt(updatedB)}
  //           </div>
  //         );
  //       } else {
  //         return (
  //           <div key={index}>
  //             {parseInt(updatedB)} ({parseFloat(updatedB).toFixed(5)}...)
  //           </div>
  //         );
  //       }
  //     } else {
  //       return (
  //         <div key={index}>
  //           エラー: 変数 {a} が 定義 されてません！<br />
  //         </div>
  //       );
  //     }
  //   }
  //   return null;
  // };

  return (
    <div style={editorStyle}>
      <h2 style={{ color: '#569cd6' }}>Terminal</h2>
      <div style={codeStyle}>
        {sortedCode.map((item, index) => renderCodeItem(item, index))}
      </div>
    </div>
  );
};

export default Terminal;
