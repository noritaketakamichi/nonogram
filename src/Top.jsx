import React, { useState, useEffect } from 'react';
import './App.scss';
import PictureList from './components/PictureList';
import Navbar from './components/Navbar';

function Top() {


	return (
		<div>
			<Navbar/>
			<PictureList/>
		</div>
	);
}

export default Top;
