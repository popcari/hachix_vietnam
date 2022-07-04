let btn = document.querySelector("button");
let div = document.querySelector(".card__image");
div.style.display = "none";

btn.addEventListener("click", () => {
	console.log(div.style.display);
	if (div.style.display === "none") {
		console.log(1);
		div.style.display = "block";
		div.style.display.hover = "none";
	} else {
		console.log(2);
		div.style.display = "none";
	}
});
