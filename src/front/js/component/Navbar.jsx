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
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">{store.cohorte}</span>
				</Link>
				<div className="ml-auto">
					<Link to="/contacts">
						<button className="btn btn-primary">Contacts</button>
					</Link>
					<span className="btn btn-primary" onClick={() => handleSelected("people")}> Characters</span>
					<span className="btn btn-primary" onClick={() => handleSelected("planets")}> Planes</span>
					<span className="btn btn-primary" onClick={() => handleSelected("starships")}> Starships</span>
				</div>
			</div>
		</nav>
	);
};
