import React from "react"; // Importation de React

function Banner({ imgSrc, text }) {
	return (
		<div className="main__container__banner-container">
			<img className="main__container__banner-container__img" src={imgSrc} alt="background img" />
			<div className="main__container__banner-container__overlay">
				{/* Si la prop `text` existe, on l'affiche dans un paragraphe */}
				{text && <p className="main__container__banner-container__overlay__p">{text}</p>}
			</div>
		</div>
	);
}

export default Banner; // Exportation du composant Banner pour l'utiliser ailleurs
