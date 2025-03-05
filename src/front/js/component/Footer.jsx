import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Footer = () => {
	//Code JS
	const { store } = useContext(Context)
	return (
		<footer className="footer mt-auto py-3 text-center">
			<p>
			<footer class="footer mt-auto py-3 bg-body-tertiary text-center bg-dark">
				<p class="text-secondary">
					Con mucho amor por Jenny <i class="fa-regular fa-heart"></i>
				</p>
			</footer>
			</p>
		</footer>
	);
}
// by <a class="text-secondary" href="https://4geeksacademy.com" target="_blank">4Geeks Academy</a> and <a class="text-secondary" href="https://chocobar.net" target="_blank">Hector Chocobar-Torrejon</a></p></footer>