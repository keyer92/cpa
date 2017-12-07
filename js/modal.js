var link = document.querySelectorAll(".main-nav__user-login");
var popup = document.querySelector(".modal-login");
var close = document.querySelectorAll(".visually-hidden");


for ( var i = 0; i < link.length; i++) {
	link[i].addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.remove("visually-hidden");
	});
}


for ( var i = 0; i < close.length; i++) {
	close[i].addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.add("visually-hidden");
	});
}