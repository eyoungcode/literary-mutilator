import React from "react";

export const FontColorChange = () => {
	/**
	 * Text Color Changer
	 * Changes the color of the paragraph text
	 **/
	const textColor = e => {
		document.getElementById("text-color").style.color = "red";
	};

	/**
	 * Reset Text Color
	 * Resets the color of the paragraph text
	 **/
	const resetTextColor = () => {
		document.getElementById("text-color").style.color = "";
	};
	return (
		<section>
			<div id="text-color">
				<h2>Captains Log</h2>
				<p>
					Unidentified vessel travelling at sub warp speed, bearing 235.7. Fluctuations in energy readings from it, Captain. All transporters off. A strange set-up, but I'd say the graviton generator is depolarized. The dark colourings of the scrapes are the leavings of natural rubber, a type of non-conductive sole used by researchers experimenting with electricity.
				</p>
			</div>
			<button className="btn btn-primary px-1" onClick={textColor}>
				Change Color
			</button>
			<button className="btn btn-primary px-1" onClick={resetTextColor}>
				Reset Color
			</button>
		</section>
	);
};
