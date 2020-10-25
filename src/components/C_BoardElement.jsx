import React from "react";
import "../App.scss";
import classNames from "classnames";

function C_EachBoard(props) {
  const clicked = (e) => {
    const classArr = e.target.className.split(" ");
    const currentPicArray = props.picArray;
    const xPos = Number(classArr[1].slice(-1));
    const yPos = Number(classArr[2].slice(-1));


    //白の場合は黒に
    if (currentPicArray[yPos][xPos] === 0) {
      currentPicArray[yPos][xPos] = 1;

      //リストに選択した位置があるかを確認
      if (props.checkedList.indexOf(JSON.stringify([xPos, yPos])) < 0) {
        //ない場合

        //ますを上書き、現在のボード状態を伝達
        console.log([...props.checkedList, JSON.stringify([xPos, yPos])]);
        props.setCheckedList([
          ...props.checkedList,
          JSON.stringify([xPos, yPos]),
        ]);
      }
    } else {
      console.log("object");
      //黒の場合は白に
      currentPicArray[yPos][xPos] = 0;
      //リストに選択した位置があるかを確認
      const pos = props.checkedList.indexOf(JSON.stringify([xPos, yPos]));

      if (pos >= 0) {
        //ある場合
        //なぜparseとstringifyしなきゃ行けないのか訳がわからない
        let newCheckedList = JSON.parse(JSON.stringify(props.checkedList));

        //ますを上書き、現在のボード状態を伝達
        newCheckedList.splice(pos, 1);
        console.log(newCheckedList);
        props.setCheckedList(newCheckedList);
        console.log("when click black elem!!");
      }
    }
    props.setPicArray(currentPicArray);
  };

  const xaxis = `x${props.xPos}`;
  const yaxis = `y${props.yPos}`;
  return (
    <div
      className={classNames("boardElem", xaxis, yaxis)}
      onClick={clicked}
    ></div>
  );
}

export default C_EachBoard;
