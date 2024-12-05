// IMPORTATION DES COMPOSANTS
import React from "react"; // Importation de React
import Header from "../layout/header"; // Importation du composant Header
import Main from "../layout/mainSectionHome"; // Importation du composant Main
import Footer from "../layout/footer"; // Importation du composant Footer

// IMPORTATION DU SCSS
import "../../scss/components/Banner.scss"; // Importation du style pour la banniere
import "../../scss/components/Card.scss"; // Importation du style pour les cards

function Home() {
	return (
		<>
			<Header /> {/* Utilisation du composant Header.jsx */}
			<Main /> {/* Utilisation du composant mainSection.jsx */}
			<Footer /> {/* Utilisation du composant Footer.jsx */}
		</>
	);
}

export default Home;
