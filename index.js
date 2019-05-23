import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./styles.css";
import { FontColorChange } from "./FontColorChange";
import { FontStyle } from "./FontStyle";
import { LetThereBeLight } from "./LetThereBeLight";


function App() {
	return (
		<>
			<div className="container">
				<FontColorChange />
				<FontStyle />
				<LetThereBeLight />
			</div>
		</>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);