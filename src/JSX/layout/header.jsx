import React from "react"; // Importation de React, nécessaire pour utiliser JSX
import { Link } from "react-router-dom"; // Importation de Link pour la navigation entre les pages

function Header() {
	return (
		<header className="header">
			<div className="header__container">
				<div className="header__container__img-container">
					<img className="header__container__img-container__img" src="/images/kasa_logo_red.png" alt="Logo Kasa" /> {/* Logo de Kasa */}
				</div>
				<nav>
					<ul className="header__container__links-container">
						<li>
							{/* Utilisation de Link pour naviguer vers la page d'accueil */}
							<Link className="header__container__links-container__link" to="/">
								Accueil
							</Link>
						</li>
						<li>
							{/* Utilisation de Link pour naviguer vers la page "À propos" */}
							<Link className="header__container__links-container__link" to="/About">
								A propos
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header; // Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
