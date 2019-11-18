const openMoreRead = (sectionName) => {
	let section = document.querySelector(sectionName);
	let list = section.querySelectorAll('.repairs-brands');
	for(let i=0, l=list.length; i<l; i++){
		list[i].style.display='flex';
	}
	let button = section.querySelector('.first');
	button.style.display="none";
	let newButton =  section.querySelector('.end');
	newButton.style.display='block';
}

const closeMoreRead = (sectionName) => {
	let section = document.querySelector(sectionName);
	const rep = (index) => {
		for(let i=index, l=list.length; i<l; i++){
		list[i].style.display='none';
		}
	}
	let list = section.querySelectorAll('.repairs-brands');
	if(window.matchMedia('screen and (min-width: 1120px)').matches) {
 		rep(8);
	} else if(window.matchMedia('screen and (min-width: 768px)').matches) {
  	rep(6);
	} else {
		rep(2);
	}
	let button = section.querySelector('.first');
	button.style.display="block";
	let newButton =  section.querySelector('.end');
	newButton.style.display='none';
}


