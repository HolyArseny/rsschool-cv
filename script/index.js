const nav = document.querySelector('#nav');
const burger = document.querySelector('#burger');

burger.addEventListener('click', () => {
  nav.classList.toggle('cv__navigation--open');
});
console.log(`
Вёрстка валидная +10;
вёрстка семантическая +16;
для оформления СV используются css-стили +10;
контент размещается в блоке, который горизонтально центрируется на странице +10;
вёрстка адаптивная: ни на одном из разрешений экрана до 320px +10;
eсть адаптивное бургер-меню +10;
на странице СV присутствует изображение - фото или аватарка автора CV +10;
контакты для связи и перечень навыков оформлены в виде списка ul > li +10;
CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10;
CV выполнено на английском языке +10;
выполнены требования к Pull Request +10;
дизайн, оформление, качество выполнения CV не ниже чем в примерах CV +10.
Тотал: 126.
`);