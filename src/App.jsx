import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Board from './components/Board';

function App() {
	//ボード
	const [picArray, setPicArray] = useState([
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	]);

	const [checkedList, setCheckedList] = useState([]);

  //[上の数字][下の数字]
	const [numbers, setNumbers] = useState([
		['0', '1', '8', '9', '2 3', '1 3', '5', '3', '1', '0'],
		['1　1', '5', '2', '2', '2', '6', '7', '6', '1　1', '1　1'],
	]);

	return (
		<div>
			<Board
				picArray={picArray}
				setPicArray={setPicArray}
				checkedList={checkedList}
        setCheckedList={setCheckedList}
        numbers={numbers}
			/>
		</div>
	);
}

export default App;
