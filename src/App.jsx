import React, { useState, useEffect } from 'react';
import './App.scss';
import Board from './components/Board';
import Icons from './components/Icons';
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
  
  //正解の配列
  const [answerPic, setAnswerPic] = useState([]);

  //黒塗りのマスの配列
	const [checkedList, setCheckedList] = useState([]);
  
  //[上の数字][下の数字]
  const [numbers, setNumbers] = useState([
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '']
  ]);

  //選択されたアイコン
  //0=>黒 1=>バツ　2=>白
  const [selectedIcon,setSelectedIcon]=useState(0)

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
      <Icons selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon}/>
      {(JSON.stringify(picArray)===JSON.stringify(answerPic))
       ?<p className="bigHello">You completed!!!!</p>
       :<></>
      }
		</div>
	);
}

export default App;
