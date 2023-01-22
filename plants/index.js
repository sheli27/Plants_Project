console.log('1. Вёрстка соответствует макету. Ширина экрана 768px +24');
console.log('2. Вёрстка соответствует макету. Ширина экрана 380px +24');
console.log('3. Ни на одном из разрешений до 320px включительно не появляется \nгоризонтальная полоса прокрутки. Весь контент страницы при этом \nсохраняется: не обрезается и не удаляется +15');
console.log('4. На ширине экрана 380рх и меньше реализовано адаптивное меню +22 \n(Допускается появление адаптивного меня на ширине более 380, но \nне допускается на ширине более 770px');
console.log('Общая: 75/75')

const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

document.body.addEventListener("click", function (e) {
		
	if (e.target.closest('.burger')) {
		document.body.classList.toggle('_closed');
		burger.classList.toggle('_open');
		nav.classList.toggle('_open');
			
	} else {
		document.body.classList.remove('_closed');
		burger.classList.remove('_open');
		nav.classList.remove('_open');
	};
});

