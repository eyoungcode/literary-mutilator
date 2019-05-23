import React from "react";

export const FontStyle = () => {
	const fontStyle = () => {
		//grab the paragraph, store it in a variable
		const text = document.getElementById("font-style");

		//if the font has been changed, set it back to the default
		//otherwise change font family to Pacifico on checkbox click
		text.style.fontFamily === "Pacifico"
			? (text.style.fontFamily = "")
			: (text.style.fontFamily = "Pacifico");
	};

	return (
		<>
			<section className="mx-auto">
				<div id="font-style">
					<h2>Porky Pig</h2>
					<p className="lead">
						Shank kevin burgdoggen rump, t-bone andouille brisket pork loin porchetta spare ribs. Shoulder pork belly bresaola pork loin rump. Tri-tip ham hock filet mignon burgdoggen prosciutto cow pig pancetta chuck drumstick bresaola pork loin t-bone ham.
					</p>
				</div>
				<div className="checkbox">
					<label>
						<input id="change-font" type="checkbox" onChange={fontStyle} /> Hit
						Me
					</label>
				</div>
			</section>
		</>
	);
};
