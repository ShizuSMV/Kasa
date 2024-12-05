import React from "react"; // Importation de React, nécessaire pour utiliser JSX

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__container">
				<div className="footer__container__img-container">
					<img className="footer__container__img-container__img" src="/images/kasa_logo_white.png" alt="Logo Kasa" /> {/* Logo de Kasa dans le pied de page */}
				</div>
				<p className="footer__container__copyright">© 2024 Kasa, Inc. Tous droits réservés.</p>
			</div>
		</footer>
	);
}

export default Footer; // Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
