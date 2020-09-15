import React, { useState, useEffect } from 'react';
import '../Picture.scss';
import axios from 'axios';

function Picture(props) {

	return (
		<div className="pictureflame">
			<p>{props.picture.name}</p>
            <p>made by {props.picture.author}</p>
		</div>
	);
}

export default Picture;
