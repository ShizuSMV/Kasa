import React from "react"; // Importation de React, nécessaire pour utiliser JSX
import logements from "../../data/logements.json"; // Importation des données des logements depuis un fichier JSON
import { useParams } from "react-router-dom"; // Importation du hook useParams pour récupérer l'ID de l'URL
import Carousel from "../components/carousel"; // Importation du composant Carousel pour afficher des images en diaporama
import Tag from "../components/offersTag"; // Importation du composant Tag pour afficher les tags du logement
import Stars from "../components/stars"; // Importation du composant Stars pour afficher l'évaluation du logement
import ToggleInfoMenu from "../components/ToggleInfoMenu"; // Importation du composant ToggleInfoMenu pour afficher les sections déroulantes
import { Navigate } from "react-router-dom"; // Importation de Navigate pour rediriger l'utilisateur en cas d'erreur

function MainSectionOffers() {
	const { id } = useParams(); // Récupère l'ID du logement depuis l'URL de la page
	const logement = logements.find((item) => item.id === id); // Recherche dans les données JSON le logement ayant cet ID

	// Si aucun logement n'est trouvé avec l'ID, redirige vers la page "not-found"
	if (!logement) {
		return <Navigate to="/not-found" />; // Si le logement n'existe pas, redirige vers une page 404
	}

	// Si un logement est trouvé, afficher les informations du logement
	return (
		<main className="main">
			<div className="main__container">
				{/* Affichage du carousel des images du logement */}
				<Carousel pictures={logement.pictures} /> {/* Le composant Carousel reçoit un tableau d'images à afficher */}
				<div className="main__container__description">
					<div className="main__container__description__presentation">
						{/* Section pour la présentation générale du logement */}
						<h1 className="main__container__description__presentation__heading">{logement.title}</h1> {/* Titre du logement */}
						<p className="main__container__description__presentation__p">{logement.location}</p> {/* Localisation du logement */}
						{/* Passer les tags du logement au composant Tag pour les afficher */}
						<Tag tags={logement.tags} /> {/* Le composant Tag reçoit un tableau de tags à afficher */}
					</div>
					<div className="main__container__description__author">
						<div className="main__container__description__author__info">
							<p className="main__container__description__author__info__name">{logement.host.name}</p> {/* Nom de l'hôte */}
							<img className="main__container__description__author__info__img" src={logement.host.picture} alt={logement.host.name} /> {/* Photo de l'hôte */}
						</div>
						{/* Affichage de l'évaluation du logement */}
						<Stars rating={logement.rating} /> {/* Le composant Stars reçoit la note du logement */}
					</div>
				</div>
				<div className="main__container__infos">
					{/* Conteneur pour les informations supplémentaires du logement */}
					{/* Affichage de la description du logement dans un menu déroulant */}
					<ToggleInfoMenu text="Description" description={logement.description} /> {/* Affiche la description du logement */}
					{/* Affichage des équipements du logement dans un autre menu déroulant */}
					<ToggleInfoMenu
						text="Équipements" // Titre du menu déroulant
						description={
							/* Contenu du menu déroulant : liste des équipements du logement */
							<ul className="main__container__infos__equipments">
								{logement.equipments.map((equipment, index /* Parcours des équipements */) => (
									<li key={index} className="main__container__infos__equipments__item">
										{equipment} {/* Affichage de chaque équipement dans une liste */}
									</li>
								))}
							</ul>
						}
					/>
				</div>
			</div>
		</main>
	);
}

export default MainSectionOffers; // Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
