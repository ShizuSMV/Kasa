import React from "react"; // Importation de React, nécessaire pour utiliser JSX
import Banner from "../components/banner"; // Importation du composant Banner pour afficher la bannière d'accueil
import Card from "../components/card"; // Importation du composant Card pour afficher les cartes des logements
import logements from "../../data/logements.json"; // Importation des données des logements depuis un fichier JSON

function MainSectionHome() {
	return (
		<main className="main">
			<div className="main__container">
				{/* Bannière spécifique pour la page d'accueil */}
				<Banner imgSrc="/images/background_home.webp" text="Chez vous, partout et ailleurs" /> {/* Affiche la bannière avec une image et un texte */}
				<section className="main__container__offers">
					<div className="main__container__offers__container">
						{/* Génération des cartes dynamiquement */}
						{logements.map((logement) => (
							<Card
								key={logement.id} // Clé unique pour chaque carte basée sur l'ID du logement
								id={logement.id} // Passage de l'ID du logement à la carte
								title={logement.title} // Passage du titre du logement à la carte
								imgSrc={logement.cover} // Passage de l'image du logement à la carte
							/>
						))}
					</div>
				</section>
			</div>
		</main>
	);
}

export default MainSectionHome; // Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
