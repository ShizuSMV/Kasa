import React from "react"; // Importation de React, nécessaire pour utiliser JSX
import Banner from "../components/banner"; // Importation du composant Banner pour afficher la bannière de la page "À propos"
import ToggleInfoMenu from "../components/ToggleInfoMenu"; // Importation du composant ToggleInfoMenu pour afficher les menus déroulants

function MainSectionAbout() {
	return (
		<main className="main">
			<div className="main__container">
				{/* Bannière */}
				<Banner imgSrc="/images/background_about.webp" /> {/* Affiche la bannière avec l'image spécifique à la page "À propos" */}
				<section className="main__container__toggle-info-menu">
					<ToggleInfoMenu
						text="Fiabilité" // Titre du menu déroulant
						description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." // Contenu du menu déroulant
					/>

					<ToggleInfoMenu
						text="Respect" // Titre du menu déroulant
						description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme" // Contenu du menu déroulant
					/>

					<ToggleInfoMenu
						text="Service" // Titre du menu déroulant
						description="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." // Contenu du menu déroulant
					/>

					<ToggleInfoMenu
						text="Sécurité" // Titre du menu déroulant
						description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes" // Contenu du menu déroulant
					/>
				</section>
			</div>
		</main>
	);
}

export default MainSectionAbout; // Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
