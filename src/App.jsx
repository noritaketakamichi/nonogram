import React, { useState, useEffect } from 'react';
import './App.scss';
import Board from './components/Board';
import axios from 'axios-https-proxy-fix';

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
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]);
  
  const [answerPic, setAnswerPic] = useState([]);

	const [checkedList, setCheckedList] = useState([]);

	useEffect(() => {
		const getPicture = () => {
			let url = 'http://localhost:5000/api/picture/1';
      const picture = axios.get(url).then(res=>{
        //set answer pic
        setAnswerPic(res.data[0].picArray);
      });
		};
    getPicture();
    console.log(answerPic);
	}, []);

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
