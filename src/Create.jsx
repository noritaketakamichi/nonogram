import React, { useState, useEffect } from 'react';
import './App.scss';
import C_Board from './components/C_Board';
import C_Icons from './components/C_Icons';
import C_Form from './components/C_Form';
import Navbar from './components/Navbar';
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

	//黒塗りのマスの配列
	const [checkedList, setCheckedList] = useState([]);

    	//作者の名前
    const [authorName, setAuthorName] = useState('');
    
	//ピクロスの名前
	const [picName, setPicName] = useState('');

	//紹介
	const [intro, setIntro] = useState('');

	//選択されたアイコン
	//0=>白 1=>黒　2=>バツ
	const [selectedIcon, setSelectedIcon] = useState(1);

	return (
		<>
			<Navbar />
			<C_Form 
            setPicName={setPicName}
            setIntro={setIntro}
            setAuthorName={setAuthorName}
            setPicArray={setPicArray}
            setCheckedList={setCheckedList}
            picArray={picArray}
            authorName={authorName}
            picName={picName}
            intro={intro}
            />
			<div className="boardCreate">
				<C_Board
					picArray={picArray}
					setPicArray={setPicArray}
					checkedList={checkedList}
					setCheckedList={setCheckedList}
                    selectedIcon={selectedIcon}
                    setPicArray={setPicArray}
				/>
				{/* <C_Icons selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} /> */}
			</div>
		</>
	);
}

export default App;
