$(document).ready(function() {
        const queryStding = window.location.search;
		const urlParams = new URLSearchParams(queryStding);
		const product = urlParams.get('message');
		document.getElementById("result").innerHTML = product;
        console.log("test"+product);
});