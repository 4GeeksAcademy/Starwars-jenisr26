import React, { useContext } from "react";
import { Context } from '../store/appContext.js';
import { Link, useNavigate } from "react-router-dom";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const handleSelected = (page) => {
		actions.setActivePage(page);
		navigate("/" + page)
	}

	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img height="55" src="https://starwars.chocobar.net/star-wars-logo.png"></img></span>
				</Link>
				<div className="ml-auto">
					<span className="btn btn-primary" onClick={() => handleSelected("people")}> Characters</span>
					<span className="btn btn-primary" onClick={() => handleSelected("planets")}> Planets</span>
					<span className="btn btn-primary" onClick={() => handleSelected("starships")}> Starships</span>
					<Link to="/contacts">
						<button className="btn btn-primary">Contacts</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
//  {store.cohorte}