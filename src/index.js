import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Vérification de l'élément avec l'ID 'root'
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendu de l'application dans le mode strict de React (aide à détecter les erreurs en développement)
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
