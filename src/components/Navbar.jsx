import React, { useState, useEffect } from 'react';
import '../Navbar.scss';
import { useHistory } from 'react-router-dom';

function Top() {

    const history = useHistory();
	return (
		<div className="navbarflame">
			<div className="home">NONOGRAM</div>
            <div className="moveToCreate" onClick={(e) => {
			history.push(`/create`);
		}}>Create Pic</div>
		</div>
	);
}

export default Top;
