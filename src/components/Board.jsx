import React from 'react';
import '../App.scss';
import BoardBar from './BoardBar';
import classNames from 'classnames';

function Board(props) {
	return (
		<div >
			{/* チェックされた箇所のリスト */}
			{props.checkedList.map((elm) => {
        let elemType;
        if(elm[2]==0){
          elemType="whiteElem"
        }else if(elm[2]==2){
          elemType="batsuElem"
        }else{
          elemType="blackElem"
        }

				return <div className={classNames(elemType, `x${elm[0]}`, `y${elm[1]}`)}></div>;
			})}

			{/* マスのリスト */}
			{props.picArray.map((elm, index) => {
				return (
					<BoardBar
						yPos={index}
						boardArray={elm}
						picArray={props.picArray}
						setPicArray={props.setPicArray}
						checkedList={props.checkedList}
            setCheckedList={props.setCheckedList}
            answerPic={props.answerPic}
            selectedIcon={props.selectedIcon}
					/>
				);
			})}
			{/* 上と左の数字 */}
			{props.numbers[0].map((elm, index) => {
				return (
					<div className={classNames('upperBar', `upper${index}`)}>
						<p className="upperNumbers">{elm}</p>
					</div>
				);
			})}

			{props.numbers[1].map((elm, index) => {
				return (
					<div className={classNames('leftBar', `left${index}`)}>
						<p className="leftNumbers">{elm}</p>
					</div>
				);
			})}
		</div>
	);
}

export default Board;
