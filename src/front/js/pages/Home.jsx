import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Contacts from "./Contacts.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center my-5 bg-dark">
			<img src="https://starwars.chocobar.net/star-wars-back0.jpg"></img>
		</div>
	);
};
//<div><a class="navbar-brand" href="/"><img height="55" src="./star-wars-logo.png"></a></div><div><ul class="nav me-auto mb-2 mb-lg-0"><li class="nav-item"><a class="nav-link link-secondary" href="/characters"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Personajes</font></font></a></li><li class="nav-item"><a class="nav-link link-secondary" href="/planets"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Planetas</font></font></a></li><li class="nav-item"><a class="nav-link link-secondary" href="/starships"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Naves espaciales</font></font></a></li><li class="nav-item"><a class="nav-link link-secondary" href="/contacts"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Contactos</font></font></a></li><li class="nav-item"><div class="dropdown"><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Favoritos</font></font><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></span></button><ul class="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end"><li><span class="dropdown-item"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">No hay favoritos seleccionados</font></font></span></li></ul></div></li></ul></div></div>