const exploreButton = document.querySelector('#explore-button');
const message = document.querySelector('#message');

exploreButton.addEventListener('click', () => {
	message.textContent = 'Novidades chegando em breve ✦';
	exploreButton.textContent = 'Em construção';
	exploreButton.setAttribute('aria-label', 'Portfólio em construção');
});
