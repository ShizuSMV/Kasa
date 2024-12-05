import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./JSX/pages/Home";
import About from "./JSX/pages/About";
import Offers from "./JSX/pages/Offers";
import NotFound from "./JSX/pages/NotFound";
import "./scss/index.scss";

function App() {
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/offers/:id" element={<Offers />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
