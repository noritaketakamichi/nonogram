import React from 'react';
import '../App.scss';
import classNames from 'classnames';

function Board(props) {

    //アイコンをクリックするとオレンジ色の影がつく
    const setblack=()=>{
        props.setSelectedIcon(0);
        console.log(0);
    }

    const setbatsu=()=>{
        props.setSelectedIcon(1);
        console.log(1);
    }

    const setwhite=()=>{
        props.setSelectedIcon(2);
        console.log(2);
    }

	return (
		<div className="iconBoard">
            <div className={classNames("icon","blackIcon",{selectedIcon:(props.selectedIcon==0)})} onClick={setblack}></div>
            <div className={classNames("icon","batsuIcon",{selectedIcon:(props.selectedIcon==1)})} onClick={setbatsu}></div>
            <div className={classNames("icon","whteIcon",{selectedIcon:(props.selectedIcon==2)})} onClick={setwhite}></div>
		</div>
	);
}

export default Board;
