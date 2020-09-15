import React, { useState, useEffect } from 'react';
import './App.scss';
import Board from './components/Board';
import Icons from './components/Icons';
import axios from 'axios';

function App(props) {
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

	//正解の配列
	const [answerPic, setAnswerPic] = useState([]);

	//黒塗りのマスの配列
	const [checkedList, setCheckedList] = useState([]);

	//[上の数字][下の数字]
	const [numbers, setNumbers] = useState([
		['', '', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', '', ''],
	]);

	//ピクロスの名前
	const [picName, setPicName] = useState('');

	//選択されたアイコン
	//0=>白 1=>黒　2=>バツ
	const [selectedIcon, setSelectedIcon] = useState(1);

	
	useEffect(() => {
		const getPicture = () => {
			
			const { params } = props.match;
			let url = `/api/picture/${params.id}`;
			const picture = axios.get(url).then((res) => {
				console.log(res)
				//set answer pic
				setAnswerPic(JSON.parse(res.data[0].picArray));
				setNumbers(JSON.parse(res.data[0].numbers));
				setPicName(res.data[0].name);
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
				selectedIcon={selectedIcon}
				picName={picName}
			/>
			<Icons selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} />
		</div>
	);
}

export default App;
