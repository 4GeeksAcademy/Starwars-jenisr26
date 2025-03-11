import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Footer = () => {

	const { store } = useContext(Context)
	return (
			<footer className="footer mt-auto py-3 bg-body-tertiary text-center bg-dark ">
				<p className="text-secondary text-white">
					Con mucho amor de parte de Jenny <i className="fa-regular fa-heart"></i>
				</p>
				
			</footer>
	);
}
