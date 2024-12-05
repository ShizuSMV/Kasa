// IMPORTATION DES COMPOSANTS
import React from "react"; // Importation de React
import Header from "../layout/header"; // Importation du composant Header
import Main from "../layout/mainSectionAbout"; // Importation du composant Main
import Footer from "../layout/footer"; // Importation du composant Footer

// IMPORTATION DU SCSS
import "../../scss/components/Banner.scss"; // Importation du style pour la banniere
import "../../scss/components/ToggleInfoMenu.scss"; //  Importation du style pour le menu déroulant

function About() {
	return (
		<>
			<Header /> {/* Utilisation du composant Header.jsx */}
			<Main /> {/* Utilisation du composant mainSection.jsx */}
			<Footer /> {/* Utilisation du composant Footer.jsx */}
		</>
	);
}

export default About;
