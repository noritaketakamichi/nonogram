import React from 'react';
import '../App.scss';
import EachBoard from './BoardElement';

function BoardBar(props) {
	return (
		<>
			{props.boardArray.map((elm, index) => {
				const xaxis = `x${index}`;
				return (
					<EachBoard
						xPos={index}
						yPos={props.yPos}
						array={elm}
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
		</>
	);
}

export default BoardBar;
