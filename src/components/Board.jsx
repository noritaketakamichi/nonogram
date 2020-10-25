import React from "react";
import "../App.scss";
import BoardBar from "./BoardBar";
import classNames from "classnames";

function Board(props) {
  return (
    <>
      {/* チェックされた箇所のリスト */}
      {props.checkedList.map((elm) => {
        let elemType;
        if (elm[2] === 0) {
          elemType = "whiteElem";
        } else if (elm[2] === 2) {
          elemType = "batsuElem";
        } else {
          elemType = "blackElem";
        }

        return (
          <div
            className={classNames(elemType, `x${elm[0]}`, `y${elm[1]}`)}
          ></div>
        );
      })}

      {/* マスのリスト */}
      {props.picArray.map((elm, index) => {
        return (
          <div>
            <BoardBar
              yPos={index}
              boardArray={elm}
              picArray={props.picArray}
              setPicArray={props.setPicArray}
              checkedList={props.checkedList}
              setCheckedList={props.setCheckedList}
              answerPic={props.answerPic}
              selectedIcon={props.selectedIcon}
              picName={props.picName}
            />
          </div>
        );
      })}
      {/* 上と左の数字 */}
      {/* 上 */}

      {props.numbers[0].map((elm, index) => {
		  console.log("upper",elm);
        return (
          //   <div className="upperBarContainer">
          <div
            className={classNames(
              "upperBarContainer",
              "upperBar",
              `upper${index}`
            )}
          >
            <div>
              {/* <p className="upperNumbers">{elm}</p> */}
              {elm.split(" ").map((num) => {
                return <p className="upperLine">{num}</p>;
              })}
            </div>
          </div>
          //   </div>
        );
      })}

      {/* 左	 */}
      {props.numbers[1].map((elm, index) => {
        return (
          <div className={classNames("leftBar", `left${index}`)}>
            <p className="leftNumbers">{elm}</p>
          </div>
        );
      })}
    </>
  );
}

export default Board;
