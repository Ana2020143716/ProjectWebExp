
/*mudar a cor do nome quando passa o rato por cima*/
const h1 = document.getElementById('h1');

h1.addEventListener('mouseover', function handleMouseOver() {
  h1.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
});


/*para voltar a preto
h1.addEventListener('mouseout', function handleMouseOut() {
  h1.style.color = 'black';
});*/

//para desenhar na pagina
window.addEventListener('load', () => {
  resize();
  document.addEventListener('mousedown', startPainting);
  document.addEventListener('mouseup', stopPainting);
  document.addEventListener('mousemove', draw);
  //limpar a janela
  document.addEventListener('keydown', function (event) {
    if (event.key === 'c') {
      clearCanvas();
    }
  });
  //limpar a janela
  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  addEventListener('resize', resize);

});

const canvas = document.querySelector('#canvas');

const ctx = canvas.getContext('2d');

function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

let coord = { x: 0, y: 0 };

let paint = false;

function getPosition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}

//para pintar quando clicamos com o rato
function startPainting(event) {
  paint = true;
  getPosition(event);
}

//para parar de pintar quando deixamos de clicar com o rato
function stopPainting() {
  paint = false;
}

function draw(event) {
  if (!paint) return;
  ctx.beginPath();

  ctx.lineWidth = 10;
  //linha redonda
  ctx.lineCap = 'round';
  //cor da linha
  ctx.strokeStyle = '#' + Math.floor(Math.random() * 16777215).toString(16);
  //fazer a linha, sem isto dá apenas os pontos
  ctx.moveTo(coord.x, coord.y);

  getPosition(event);

  ctx.lineTo(coord.x, coord.y);

  ctx.stroke();
}

