import React from 'react';
import '../App.scss';
import BoardBar from './BoardBar';
import classNames from 'classnames';

function Board(props) {
	return (
			<div className="board">
        {/* チェックされた箇所のリスト */}
				{props.checkedList.map((elm) => {
					return <div className={classNames('checked',`x${elm[0]}`,`y${elm[1]}`)}></div>;
				})}
				{props.picArray.map((elm, index) => {
					return (
						<BoardBar
							xPos={index}
							boardArray={elm}
							picArray={props.picArray}
							setPicArray={props.setPicArray}
							checkedList={props.checkedList}
							setCheckedList={props.setCheckedList}
						/>
					);
				})}
			</div>
	);
}

export default Board;
