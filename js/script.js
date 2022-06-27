function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

const back = document.querySelectorAll(".back")
const items = document.querySelectorAll(".section-vision__item")
const links = document.querySelectorAll(".menu__link")


items.forEach(item => {
	item.querySelector(".item__button").addEventListener("click", e => {
		item.classList.add("item--active")
	})
	item.querySelector(".back").addEventListener("click", e => {
		item.classList.remove("item--active")
	})
})


const burger = document.getElementById('burger-menu')
const page = document.getElementById('page')
const body = document.body

burger.addEventListener('click', () => {
	if (body.classList.contains('show-menu')) {
		closeSidebar()
	} else {
		showSidebar()
	}
})

function showSidebar() {
	document.getElementById("page__mask").addEventListener('click', closeSidebar)
	body.classList.add('show-menu')
}

function closeSidebar() {
	body.classList.remove('show-menu')
}

const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
if (menuLinks.length > 0) {
	menuLinks.forEach(link => {
		link.addEventListener("click", onMenuLinkClick)
	})
	function onMenuLinkClick(e) {
		closeSidebar()
		const menuLink = e.target
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto)
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			})
			e.preventDefault()
		}
	}
}
