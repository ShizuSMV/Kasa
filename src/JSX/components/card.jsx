import React from "react"; // Importation de React
import { useNavigate } from "react-router-dom"; // Importation de `useNavigate` pour la navigation avec React Router

function Card({ id, title, imgSrc }) {
	// Initialisation de la fonction `navigate` qui permet de rediriger l'utilisateur
	const navigate = useNavigate();

	// Fonction appelée lors du clic sur la carte
	function cardOnClick() {
		// Utilisation de `navigate` pour rediriger l'utilisateur vers la page de l'annonce spécifique,
		// en utilisant l'ID de l'offre pour former l'URL dynamique.
		navigate(`/offers/${id}`);
	}

	return (
		<div onClick={cardOnClick} className="main__container__offers__container__card">
			{/* Affichage de l'image de la carte avec l'attribut src pointant vers `imgSrc` */}
			<img className="main__container__offers__container__card__img" src={imgSrc} alt={title} />
			{/* Affichage du titre de la carte, en utilisant `title` passé en prop */}
			<p className="main__container__offers__container__card__p">{title}</p>
		</div>
	);
}

export default Card; // Exportation du composant Card pour l'utiliser ailleurs
