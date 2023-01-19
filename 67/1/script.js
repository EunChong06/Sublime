function update() {
	var select = document.getElementById('a');
	var option = select.options[select.selectedIndex];
	document.getElementById('text').style.color = option.value;
	document.getElementById('text').innerHTML = option.value;
}


