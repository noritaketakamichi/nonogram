import React from 'react';
import '../App.scss';
import classNames from 'classnames';

function EachBoard(props) {

  const clicked=(e)=>{
    const classArr = e.target.className.split(' ');
    const currentPicArray=props.picArray
    const xPos=Number(classArr[1].slice(-1));
    const yPos=Number(classArr[2].slice(-1));

    //まだチェックされていない時
    if(props.picArray[xPos][yPos]==0){
      props.setCheckedList([...props.checkedList,[xPos,yPos]]);
      currentPicArray[xPos][yPos]=1;
      props.setPicArray(currentPicArray);
    }

    console.log([xPos,yPos]);
    console.log(props.picArray);
  }

  const xaxis=`x${props.xPos}`;
  const yaxis=`y${props.yPos}`;
  return (
    <div className={classNames('boardElem',xaxis,yaxis)} onClick={clicked}></div>
  );
}

export default EachBoard;
