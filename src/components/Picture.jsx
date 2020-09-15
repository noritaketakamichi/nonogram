import React, { useState, useEffect } from 'react';
import '../Picture.scss';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Picture(props) {
	
	const history = useHistory();
	return (
		<div className="pictureflame" >
			<p>{props.picture.name}</p>
            <p>made by {props.picture.author}</p>
			<div className="playCard" onClick={(e) => {
			history.push(`/play/${props.picture.id}/`);
		}}><p className="playString">PLAY THIS</p></div>
		</div>
	);
}

export default Picture;
