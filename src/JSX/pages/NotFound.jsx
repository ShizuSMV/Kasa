// IMPORTATION DES COMPOSANTS
import React from "react"; // Importation de React
import Header from "../layout/header"; // Importation du composant Header
import Footer from "../layout/footer"; // Importation du composant Footer

// IMPORTATION DU SCSS
import "../../scss/layout/NotFound.scss";

import { useNavigate } from "react-router-dom"; // Import du hook useNavigate (Un hook est une fonction spéciale)
function NotFound() {
	const navigate = useNavigate(); // Initialisation du hook useNavigate

	const redirect = () => {
		navigate("/"); // Redirection vers la page d'accueil
	};

	return (
		<>
			<Header /> {/* Utilisation du composant Header.jsx */}
			<main className="main-notFound">
				<h1 className="main-notFound__heading">404</h1>
				<p className="main-notFound__p">Oups! La page que vous demandez n'existe pas.</p>
				{/* Appel de la fonction handleRedirect au clic sur le bouton */}
				<button className="main-notFound__btn" onClick={redirect}>
					Retourner sur la page d’accueil
				</button>
			</main>
			<Footer /> {/* Utilisation du composant Footer.jsx */}
		</>
	);
}

export default NotFound;
