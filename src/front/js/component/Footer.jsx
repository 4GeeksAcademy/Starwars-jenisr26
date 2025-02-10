import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Footer = () => {
	//Code JS
	const { store } = useContext(Context)
	return (
		<footer className="footer mt-auto py-3 text-center">
			<p>
				Made with <i className="fa fa-heart text-danger" /> by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
				<span> for {store.cohorte}</span>
			</p>
		</footer>
	);
}
