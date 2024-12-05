import React, { useState } from "react"; // Importation de React et useState pour gérer l'état

function Carousel({ pictures }) {
	// Déclaration de l'état `currentIndex` pour suivre l'index de l'image actuellement affichée
	const [currentIndex, setCurrentIndex] = useState(0); // Initialisation à 0, l'image par défaut est la première

	// Fonction pour afficher l'image précédente
	const prevSlide = () => {
		// Si on est sur la première image (index 0), on revient à la dernière image
		// Sinon, on diminue l'index pour passer à l'image précédente
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
	};

	// Fonction pour afficher l'image suivante
	const nextSlide = () => {
		// Si on est sur la dernière image (index `pictures.length - 1`), on revient à la première image
		// Sinon, on augmente l'index pour passer à l'image suivante
		setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
	};

	// Rendu du composant carousel
	return (
		<div className="main__container__carousel">
			{/* Affichage de l'image actuelle en utilisant `currentIndex` */}
			<img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="main__container__carousel__img" />
			{/* Affichage des boutons de navigation (Précédent / Suivant) seulement si plusieurs images sont présentes */}
			{pictures.length > 1 && (
				<>
					<div className="main__container__carousel__button">
						{/* Bouton Précédent */}
						<button onClick={prevSlide} className="main__container__carousel__button__prev-next">
							&#10094; {/* Flèche gauche */}
						</button>
						{/* Bouton Suivant */}
						<button onClick={nextSlide} className="main__container__carousel__button__prev-next">
							&#10095; {/* Flèche droite */}
						</button>
					</div>
				</>
			)}
		</div>
	);
}

export default Carousel; // Exportation du composant Carousel pour l'utiliser ailleurs
