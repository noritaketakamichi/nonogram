import React, { useState, useEffect } from 'react';
import './App.scss';
import PictureList from './components/PictureList';

function Top() {


	return (
		<div>
			<p>Nonogram</p>
			<PictureList/>
		</div>
	);
}

export default Top;
