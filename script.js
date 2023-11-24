/*mudar a cor do nome quando passa o rato por cima*/
const h1 = document.getElementById('h1');

h1.addEventListener('mouseover', function handleMouseOver() {
  h1.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
});


/*para voltar a preto
h1.addEventListener('mouseout', function handleMouseOut() {
  h1.style.color = 'black';
});*/

/*mudar o modo para light ou dark ou para outra cor de fundo quando se clica no botão*/
const modeToggle = document.getElementById('modeToggle');
const icon = document.getElementById('icon');
const text = document.getElementById('mode');
let darkMode = false;

const colorMode = document.getElementById('colorMode');
let anotherMode = false;


modeToggle.addEventListener('click', () => {
  darkMode = !darkMode;

  if (darkMode) {
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = "#ffffff";
    modeToggle.style.backgroundColor = "#f0f0f0";
    text.innerText = "dark mode";
    icon.src = './images/moon.svg';
  } else {
    document.body.style.backgroundColor = '#f0f0f0';
    document.body.style.color = "#000000";
    modeToggle.style.backgroundColor = "#202020";
    text.innerText = "light mode";
    icon.src = './images/sun.svg';
  }
}
);

colorMode.addEventListener('click', () => {
  anotherMode = !anotherMode;

  if (anotherMode) {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.color = '#ffffff';
  } else {
    document.body.style.backgroundColor = '#f0f0f0';
    document.body.style.color = "#000000";
  }
}
);

/*flores a aparecer e a desaparecer*/
document.addEventListener("DOMContentLoaded", function () {
  const containerFlor = document.getElementById('containerFlor');

  // Array flores
  const imagens = [
    './images/flores/flor1.png',
    './images/flores/flor2.png',
    './images/flores/flor3.png',
    './images/flores/flor4.png',
    './images/flores/flor5.png',
    './images/flores/flor6.png',
    './images/flores/flor7.png',
    './images/flores/flor8.png',
    './images/flores/flor9.png',
    './images/flores/flor10.png',
    './images/flores/flor11.png',
    './images/flores/flor12.png',
    './images/flores/flor13.png',
    './images/flores/flor14.png',
    './images/flores/flor15.png',
    './images/flores/flor16.png',
    './images/flores/flor17.png',
    './images/flores/flor18.png',
    './images/flores/flor19.png',
    './images/flores/flor20.png'
  ];

  //quantidade de flores
  for (let i = 0; i < 60; i++) {
    criarFlores();
  }

  //criar as flores
  function criarFlores() {
    const flor = document.createElement('img');
    const criarImagens = imagens[Math.floor(Math.random() * imagens.length)];
    flor.src = criarImagens;
    flor.alt = 'Flor';
    flor.classList.add('flor');
    setRandomPosition(flor); //posição aleatória
    containerFlor.appendChild(flor);
    animarFlor(flor);
  }

  function animarFlor(flor) {
    flor.addEventListener('animationiteration', function () {
      setRandomPosition(flor);
    });
  }

  //posição aleatória
  function setRandomPosition(element) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const randomTop = Math.floor(Math.random() * (windowHeight - 120));
    const randomLeft = Math.floor(Math.random() * (windowWidth - 80));

    element.style.top = `${randomTop}px`;
    element.style.left = `${randomLeft}px`;
  }

  function handleResize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    // Reposicione as flores quando a janela é redimensionada
    const flores = document.querySelectorAll('.flor');
    flores.forEach(flor => {
        setRandomPosition(flor);
    });
} 

window.addEventListener('resize', handleResize);
});


