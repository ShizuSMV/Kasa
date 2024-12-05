import React from "react"; // Importation de React pour utiliser JSX
import PropTypes from "prop-types"; // Importation de PropTypes pour la validation des props

function Tag({ tags }) {
	return (
		<div className="main__container__description__presentation__tags">
			{/* Vérification si des tags existent et si le tableau n'est pas vide */}
			{tags && // Si `tags` existe
				tags.length > 0 && // Et si la longueur du tableau `tags` est supérieure à 0
				tags.map(
					(
						tag,
						index // On parcourt chaque élément du tableau `tags`
					) => (
						<span key={index} className="main__container__description__presentation__tags__each">
							{tag} {/* Affichage de chaque tag */}
						</span>
					)
				)}
		</div>
	);
}

// Définition des types attendus pour les props
Tag.propTypes = {
	tags: PropTypes.arrayOf(PropTypes.string).isRequired, // `tags` doit être un tableau de chaînes de caractères
};

export default Tag; // Exportation du composant Tag pour l'utiliser ailleurs
