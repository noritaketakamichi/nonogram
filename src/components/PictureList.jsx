import React, { useState, useEffect } from 'react';
import '../Picture.scss';
import Picture from './Picture';
import axios from 'axios';

function PictureList() {
	//問題の絵のデータ
	const [pictures, setPictures] = useState([]);

	useEffect(() => {
		const getAllPictures = () => {
			let url = '/api/allpictures';
			const picture = axios.get(url).then((res) => {
				console.log(res.data);
				//set answer pic
				setPictures(res.data);
			});
		};
		getAllPictures();
	}, []);

	return (
		<div>
			{pictures.map((picture) => {
				return <Picture picture={picture} />;
			})}
		</div>
	);
}

export default PictureList;
