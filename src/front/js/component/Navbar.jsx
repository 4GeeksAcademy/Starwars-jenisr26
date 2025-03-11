import React, { useContext } from "react";
import { Context } from '../store/appContext.js';
import { Link, useNavigate } from "react-router-dom";
import iconStarwars from "../../img/iconStarwars.png";
import iconBasura from "../../img/basura.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const handleSelected = (page) => {
		actions.setActivePage(page);
		navigate("/" + page)
	}

	return (
		<nav className="navbar navbar-dark bg-dark mb-3 mt-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img height="80" src={iconStarwars}></img></span>
				</Link>
				<div className="ml-auto">
					<span className="btn btn-outline-info me-3" onClick={() => handleSelected("people")}> Characters</span>
					<span className="btn btn-outline-info me-3" onClick={() => handleSelected("planets")}> Planets</span>
					<span className="btn btn-outline-info me-3" onClick={() => handleSelected("starships")}> Starships</span>
					<Link to="/contacts">
						<button className="btn btn-outline-info me-3">Contacts</button>
					</Link>
					<div className="btn-group">
						<button type="button" className="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
							<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
								{store.favorites.length}
							</span>
						</button>
						<ul className="dropdown-menu">
							{store.favorites.map((favoriteItem, index) => 
							<li key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
								<span className="dropdown-item">{favoriteItem}</span>
								<span onClick={() => actions.setFavorite(favoriteItem)}>
									<img height="40" src={iconBasura} className="me-3 btn btn-outline-danger" />
								</span>
							</li>)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
