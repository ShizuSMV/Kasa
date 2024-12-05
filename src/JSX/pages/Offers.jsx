// IMPORTATION DES COMPOSANTS
import React from "react"; // Importation de React
import Header from "../layout/header"; // Importation du composant Header
import Main from "../layout/mainSectionOffers"; // Importation du composant Main
import Footer from "../layout/footer"; // Importation du composant Footer

// IMPORTATION DU SCSS
import "../../scss/components/Carousel.scss"; // Importation du style pour le carousel
import "../../scss/components/Tag.scss"; // Importation du style pour les tags
import "../../scss/components/Stars.scss"; // Importation du style pour les étoiles

function Offers() {
	return (
		<>
			<Header /> {/* Utilisation du composant Header.jsx */}
			<Main /> {/* Utilisation du composant mainSection.jsx */}
			<Footer /> {/* Utilisation du composant Footer.jsx */}
		</>
	);
}

export default Offers;
