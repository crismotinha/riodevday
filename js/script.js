function imagem() {
	var altura = document.getElementById('codecademy').style.height;
	if (altura == "700px") {
		document.getElementById('codecademy').style.top = "-330px"
		document.getElementById('codecademy').style.left = "331px" 
		document.getElementById('codecademy').style.height = "200px"
	}
	else {
		document.getElementById('codecademy').style.top = "-350px"
		document.getElementById('codecademy').style.left = "-60px" 
		document.getElementById('codecademy').style.height = "700px"
	}
}