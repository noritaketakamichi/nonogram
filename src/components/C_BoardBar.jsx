import React from 'react';
import '../App.scss';
import C_EachBoard from './C_BoardElement';

function C_BoardBar(props) {
	return (
		<>
			{props.boardArray.map((elm, index) => {
				const xaxis = `x${index}`;
				return (
					<C_EachBoard
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

export default C_BoardBar;
