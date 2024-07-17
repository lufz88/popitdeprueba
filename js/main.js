
const hamburgerIcon = document.getElementById('hamburger-icon');
const navList = document.getElementById('nav-list');

hamburgerIcon.addEventListener('click', () => toogleDisplay(navList));

const toogleDisplay = element => {
	element.style.display == 'flex'
		? (element.style.display = 'none')
		: (element.style.display = 'flex');
};
