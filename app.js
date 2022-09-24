const	buttonSend = document.querySelector('.form__btn'),
	buttonOpen = document.querySelector('#button'),
	form = document.querySelector('.form');


buttonOpen.addEventListener('click', ()=>{
	form.classList.contains('form-none')
		? (buttonOpen.textContent = 'Close Form')
		: (buttonOpen.textContent = 'Open Form');
	form.classList.toggle('form-none');
});

function postData(a, b, c){
	if(a.length < 2 || b.length < 2 || c.length < 2){
		alert('Value must be more than 2 symbols');
	}else{
		alert('Form submitted successfully');
	}
}

buttonSend.addEventListener('click',()=>{
	const userName = document.querySelector('#name').value,
		userEmail = document.querySelector('#email').value,
		userPhone = document.querySelector('#phone').value;
	postData(userName, userEmail, userPhone);
});
