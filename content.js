const elements = document.getElementsByClassName("story-lock");

while(elements.length > 0){
	elements[0].parentNode.removeChild(elements[0]);
}