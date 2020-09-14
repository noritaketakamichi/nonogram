import React from 'react';
import '../App.scss';
import classNames from 'classnames';

function EachBoard(props) {

  const clicked=(e)=>{
    const classArr = e.target.className.split(' ');
    const xPos=Number(classArr[1].slice(-1));
    const yPos=Number(classArr[2].slice(-1));
    console.log([xPos,yPos]);
  }

  const xaxis=`x${props.xPos}`;
  const yaxis=`y${props.yPos}`;
  return (
    <div className={classNames('boardElem',xaxis,yaxis)} onClick={clicked}></div>
  );
}

export default EachBoard;
