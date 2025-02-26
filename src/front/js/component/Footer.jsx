import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Footer = () => {
	//Code JS
	const { store } = useContext(Context)
	return (
		<footer className="footer mt-auto py-3 text-center">
			<p>
				
			</p>
		</footer>
	);
}
