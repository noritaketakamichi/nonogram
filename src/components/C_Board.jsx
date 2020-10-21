import React from 'react';
import '../App.scss';
import C_BoardBar from './C_BoardBar';
import classNames from 'classnames';

function C_Board(props) {
	return (
		<div>
			{/* チェックされた箇所のリスト */}
			{props.checkedList.map((elm) => {
				// let elemType;
				// if (elm[2] === 0) {
				// 	elemType = 'whiteElem';
				// } else if (elm[2] === 2) {
				// 	elemType = 'batsuElem';
				// } else {
				// 	elemType = 'blackElem';
				// }
				const arr=JSON.parse(elm)
				console.log(arr);
				console.log(props.checkedList);

				return <div className={classNames('blackElem', `x${arr[0]}`, `y${arr[1]}`)}></div>;
			})}

			{/* マスのリスト */}
			{props.picArray.map((elm, index) => {
				return (
					<C_BoardBar
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
				);
			})}
		</div>
	);
}

export default C_Board;
