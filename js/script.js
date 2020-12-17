function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

'use strict';

const mainMenuSidebar = document.querySelector('.main__menu-sidebar');
const MobileBtnMenu = document.querySelector('.m-menu');
const stories = document.querySelector('.stories');
const fanpage = document.querySelector('.fanpage')
const post = document.querySelector('.post');

const toggleLink = (event) => {
	const link = event.target.closest('.nav-link');
	if (link) {
		if (mainMenuSidebar.querySelector('.active')) {
			mainMenuSidebar.querySelector('.active').classList.remove('active');
		}
		link.classList.add('active');
	}
};

const toggleMenuSidebar = () => {
	mainMenuSidebar.classList.toggle('main__menu-sidebar-active')
};

const removeBlueCircle = (event) => {
	const storyBtn = event.target.closest('.item__button-active');
	if (storyBtn) {
		storyBtn.classList.remove('item__button-active');
	}
	
};

const paintStatsBtn = (event) => {
	const statsBtn = event.target.closest('.stats__btn');
	if (statsBtn) {
		if (fanpage.querySelector('.stats__btn-active')) {
			fanpage.querySelector('.stats__btn-active').classList.remove('stats__btn-active');
		}
		statsBtn.classList.toggle('stats__btn-active');
	}
};

const fillPostBtn = (event) => {
	const postBtnLike = event.target.closest('.post__button');
	console.log(postBtnLike);
	if (postBtnLike) {
		postBtnLike.querySelector('#like').classList.toggle('like-active');
	}
}

mainMenuSidebar.addEventListener('click', toggleLink);
MobileBtnMenu.addEventListener('click', toggleMenuSidebar);
stories.addEventListener('click', removeBlueCircle);
fanpage.addEventListener('click', paintStatsBtn);
post.addEventListener('click', fillPostBtn);