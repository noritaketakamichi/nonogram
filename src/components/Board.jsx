import React from 'react';
import '../App.scss';
import BoardBar from './BoardBar';

function Board(props) {
  return (
    <div className="board">
      {props.picArray.map((elm,index)=>{
        return(<BoardBar xPos={index} boardArray={elm}/>)
      })}
    </div>
  );
}

export default Board;
