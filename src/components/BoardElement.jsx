import React from 'react';
import '../App.scss';
import classNames from 'classnames';

function EachBoard(props) {
	const clicked = (e) => {
		const classArr = e.target.className.split(' ');
		const currentPicArray = props.picArray;
		const xPos = Number(classArr[1].slice(-1));
		const yPos = Number(classArr[2].slice(-1));

    //ますを上書き、現在のボード状態を伝達
    props.setCheckedList([...props.checkedList, [xPos, yPos, props.selectedIcon]]);

    //黒か白で塗る時はボードを更新
    if(props.selectedIcon!=2){
      currentPicArray[yPos][xPos] = props.selectedIcon;
    }
		props.setPicArray(currentPicArray);

		console.log([xPos, yPos]);
		console.log(props.picArray);
		console.log(props.answerPic);

		//正解の絵になった時trueとなり、alertを表示
		console.log(JSON.stringify(props.answerPic) === JSON.stringify(props.picArray));
		if(JSON.stringify(props.answerPic) === JSON.stringify(props.picArray)){
			alert(`You completed 【${props.picName}】!!:)`)
		}
	};

	const xaxis = `x${props.xPos}`;
	const yaxis = `y${props.yPos}`;
	return <div className={classNames('boardElem', xaxis, yaxis)} onClick={clicked}></div>;
}

export default EachBoard;
