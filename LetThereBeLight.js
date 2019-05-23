import React from "react";

export const LetThereBeLight = () => {
	const highlight = () => {
		document.getElementById("bg-color").style.backgroundColor = "orange";
	};

	/**
	 * Background Color Reset
	 * Reset the color of the text background
	 **/
	const resetBgColor = () => {
		document.getElementById("bg-color").style.backgroundColor = "green";
	};
	return (
		<section>
			<div
				id="bg-color"
				className="custom-panel"
				onMouseOver={highlight}
				onMouseOut={resetBgColor}
			>
				<h2>More Money More Problems</h2>
				<p>
					Lorem ipsum dolor amet plaid poutine waistcoat chillwave seitan. Forage trust fund microdosing flannel everyday carry authentic occupy butcher. Banh mi jean shorts thundercats roof party beard selvage flexitarian.
				</p>
			</div>
		</section>
	);
};
