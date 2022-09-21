function handleSubmit(evt) {
	evt.preventDefault();
	
    alert("the form has been submitted");
}
let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);
