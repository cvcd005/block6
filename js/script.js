const moreRead = (sectionName) => {
	let section = document.querySelector(sectionName);
	let list = section.querySelectorAll('.repairs-brands');
	let button = section.querySelector('.btn-moreRead');
	let wrap = document.querySelector('.repairs-list-wrap');
	wrap.classList.toggle('heightoverflow');

	const changeButton = (btn, btnRemove, btnAdd, spanText, divRemove, divAdd) => {
		btn.classList.remove(btnRemove);
		btn.classList.add(btnAdd);
		let span = btn.querySelector('span');
		span.textContent=spanText;
		let div = btn.querySelector('div');
		div.classList.remove(divRemove);
		div.classList.add(divAdd);
		return btn;
	}

	if(button.classList.contains('canBig')){
		changeButton(button, 'canBig', 'canSmall', 'Свернуть',  'moreRead-icon', 'smallRead-icon');
	} else if(button.classList.contains('canSmall')){
		changeButton(button, 'canSmall', 'canBig', 'Показать все', 'smallRead-icon', 'moreRead-icon');
	}
}

const but = document.querySelector('.btn-moreRead');
but.addEventListener('click', function(){
	moreRead('.repairs');
});
