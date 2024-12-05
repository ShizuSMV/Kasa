import React from "react"; // Importation de React, nécessaire pour utiliser JSX
import PropTypes from "prop-types"; // Pour la validation des props
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importation de FontAwesome pour les icônes
import { faStar } from "@fortawesome/free-solid-svg-icons"; // Importation de l'icône étoile

function Stars({ rating }) {
	// On crée un tableau d'étoiles en fonction de la note
	// Math.round arrondit la note pour obtenir un nombre entier entre 1 et 5.
	const filledStars = Math.round(rating); // On arrondit la note pour obtenir un entier entre 1 et 5
	const totalStars = 5; // Le total d'étoiles possibles

	return (
		<div className="main__container__description__author__stars">
			{/* Afficher les étoiles remplies */}
			{Array.from({ length: totalStars }, (_, index) => (
				// Crée un tableau vide de longueur totalStars
				// Pour chaque étoile (total de 5), on crée un <span>
				// L'underscore est utilisé pour indiquer qu'on ne se souciez pas de la valeur de l'élément courant dans le tableau généré par Array.from(), mais seulement de son indice.
				// Si l'index est inférieur à la note arrondie (filledStars), on applique une classe pour l'étoile remplie
				// Sinon, on applique une classe pour l'étoile vide.
				<span key={index} className={index < filledStars ? "main__container__description__author__stars-filled" : "main__container__description__author__stars-empty"}>
					{/* Affichage de l'icône étoile */}
					<FontAwesomeIcon icon={faStar} />
				</span>
			))}
		</div>
	);
}

// Définition des types de props attendues pour ce composant
Stars.propTypes = {
	rating: PropTypes.number.isRequired, // Valide que `rating` est un nombre
};

export default Stars;

{
	/* En résumé, on crée un tableau de 5 éléments, correspondant à totalStars. 
Dans ce tableau, on ne se soucie pas des valeurs des éléments, mais on utilise uniquement leur position (l'index) pour déterminer le nombre d'étoiles à afficher. 
Si l'index est inférieur au nombre d'étoiles arrondi dans le fichier .json, seules ces étoiles seront affichées. D'ou le Math.round*/
}
