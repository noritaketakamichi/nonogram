import React, { useState, useEffect } from 'react';
import './App.scss';
import Board from './components/Board';
import axios from 'axios';

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
  
  //[上の数字][下の数字]
  const [numbers, setNumbers] = useState([
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
  ]);

	useEffect(() => {
		const getPicture = () => {
			let url = 'api/picture/1';
      const picture = axios.get(url).then(res=>{
        //set answer pic
        setAnswerPic(JSON.parse(res.data[0].picArray));
        setNumbers(JSON.parse(res.data[0].numbers));
      });
		};
    getPicture();
	}, []);


	return (
		<div className="board">
			<Board
				picArray={picArray}
				setPicArray={setPicArray}
				checkedList={checkedList}
				setCheckedList={setCheckedList}
        numbers={numbers}
        answerPic={answerPic}
			/>
      {(JSON.stringify(picArray)===JSON.stringify(answerPic))
       ?<p className="bigHello">You completed!!!!</p>
       :<></>
      }
		</div>
	);
}

export default App;
