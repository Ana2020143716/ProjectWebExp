document.addEventListener("DOMContentLoaded", function () {
    const movingImages = document.querySelectorAll('.move-image');

    //mexer as imagens
    movingImages.forEach(function (image) {
        moveImage(image);
    });

    function moveImage(image) {
        //calcular tamanho maximo
        const maxX = window.innerWidth - image.width;
        const maxY = window.innerHeight - image.height;

        image.addEventListener('click', function () {
            openImage(image.src);
        });

        setInterval(function () {
            const x = Math.floor(Math.random() * maxX);
            const y = Math.floor(Math.random() * (maxY-150));

            image.style.transform = `translate(${x}px, ${y}px)`;

        }, 4000);
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
