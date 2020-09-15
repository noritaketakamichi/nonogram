import React from 'react';
import '../App.scss';
import classNames from 'classnames';

function Board(props) {
	return (
		<div className="iconBoard">
            <div className={classNames("icon","blackIcon","selectedIcon")}></div>
            <div className={classNames("icon","checkedIcon")}></div>
            <div className={classNames("icon","whteIcon")}></div>
		</div>
	);
}

export default Board;
