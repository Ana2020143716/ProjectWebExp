document.addEventListener("DOMContentLoaded", function () {
    const movingImages = document.querySelectorAll('.move-image');

    //mexer as imagens
    movingImages.forEach(function (image) {
        moveImage(image);
    });

    function moveImage(image) {

        //para definir as posições das imagens e calcular as posições possiveis
        function imagePosition() {
            const maxX = window.innerWidth - image.width;
            const maxY = window.innerHeight - image.height;
            const newX = Math.floor(Math.random() * maxX - 100);
            const newY = Math.floor(Math.random() * maxY);

            return { x: newX, y: newY };
        }

        //abrir a imagem quando clica
        image.addEventListener('click', function () {
            openImage(image.src);
        });
        //para redefinir a posição da imagem quando redimensionamos a pagina
        function updatePosition() {
            const position = imagePosition();
            image.style.transform = `translate(${position.x}px, ${position.y}px)`;
        }

        // Mova a imagem inicialmente
        updatePosition();

        setInterval(updatePosition, 4000);
    }

    //abrir e fechar a imagem
    function openImage(imageSrc) {
        const clickContent = document.getElementById('clickContent');
        const contentOpen = document.getElementById('content-open');

        clickContent.style.display = 'block';
        contentOpen.src = imageSrc;
    }

    function closeContent() {
        const clickContent = document.getElementById('clickContent');
        clickContent.style.display = 'none';
    }

    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', closeContent);


});


