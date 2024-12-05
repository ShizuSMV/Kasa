import React, { useState } from "react"; // Importation de React et du hook useState pour gérer l'état
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importation de FontAwesome pour les icônes
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons"; // Importation des icônes pour la flèche haut et bas

function ToggleInfoMenu({ text, description }) {
	// Déclaration de l'état `isOpen` qui gère si le menu est ouvert ou fermé
	const [isOpen, setIsOpen] = useState(false);

	// Fonction pour basculer l'état d'ouverture/fermeture du menu
	const toggleMenu = () => {
		// Lorsqu'on clique sur le bouton, on inverse la valeur actuelle de `isOpen`.
		// Si le menu est fermé (isOpen = false), il devient ouvert (isOpen = true).
		// Si le menu est ouvert (isOpen = true), il devient fermé (isOpen = false).
		// Cela permet de contrôler l'affichage de la description et de l'icône de la flèche.
		setIsOpen(!isOpen); // Inverse la valeur de `isOpen` (ouvert ou fermé)
	};

	return (
		<div className="main__container__toggle-info-menu__card">
			<div className="main__container__toggle-info-menu__card__header">
				{/* Si un texte est fourni, il est affiché dans un paragraphe */}
				{text && <p className="main__container__toggle-info-menu__card__header__p">{text}</p>}

				{/* Bouton pour ouvrir ou fermer le menu */}
				<button className="main__container__toggle-info-menu__card__header__button" onClick={toggleMenu}>
					<FontAwesomeIcon
						icon={isOpen ? faChevronDown : faChevronUp} // Si le menu est ouvert, affiche la flèche vers le bas, sinon vers le haut
						className="main__container__toggle-info-menu__card__header__button__icon"
					/>
				</button>
			</div>

			{/* Description affichée sous la bannière, seulement si le menu est ouvert */}
			{isOpen && (
				<div className="main__container__toggle-info-menu__card__description">
					<p className="main__container__toggle-info-menu__card__description__p">{description}</p>
				</div>
			)}
		</div>
	);
}

export default ToggleInfoMenu; // Exportation du composant pour pouvoir l'utiliser ailleurs
