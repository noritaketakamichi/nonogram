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
						xPos={props.xPos}
						yPos={index}
						array={elm}
						picArray={props.picArray}
            setPicArray={props.setPicArray}
            checkedList={props.checkedList}
						setCheckedList={props.setCheckedList}
					/>
				);
			})}
		</>
	);
}

export default BoardBar;
