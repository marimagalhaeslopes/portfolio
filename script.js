const btnOpenMenu = document.querySelector('#open__menu');
const menu = document.querySelector('.menu');
const btnCloseMenu = document.querySelector('#close__menu')
const btnGoSite = "images/arrow_back.png"
var elementImg = document.querySelectorAll(".arrow__back");
var btnRepository = document.querySelector('.repository__decodificador__button');



btnOpenMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
  btnOpenMenu.style.display = 'none';
  btnCloseMenu.style.display = 'block';
});

btnCloseMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
  btnOpenMenu.style.display = 'block';
  btnCloseMenu.style.display = 'none';
});

elementImg.forEach((seta) => {
  seta.src = btnGoSite;
});


btnRepository.onclick = function () {
  window.open("https://github.com/scppuna/desafio-one-decodificador", "_blank");
};
