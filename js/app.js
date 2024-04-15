// Função para aba dos banners
document.addEventListener('DOMContentLoaded', function() {
    const sliderBanner = document.querySelector('.banner-ofertas .slider');
    const slidesBanner = document.querySelectorAll('.banner-ofertas .slide');
    const prevButtonBanner = document.querySelector('.banner-ofertas .prev');
    const nextButtonBanner = document.querySelector('.banner-ofertas .next');

    let indexBanner = 0;

    function nextSlideBanner() {
        indexBanner++;
        if (indexBanner === slidesBanner.length) {
            indexBanner = 0;
        }
        updateSliderBanner();
    }

    function prevSlideBanner() {
        indexBanner--;
        if (indexBanner < 0) {
            indexBanner = slidesBanner.length - 1;
        }
        updateSliderBanner();
    }

    function updateSliderBanner() {
        const slideWidthBanner = slidesBanner[0].clientWidth;
        sliderBanner.style.transform = `translateX(-${indexBanner * slideWidthBanner}px)`;
    }

    nextButtonBanner.addEventListener('click', nextSlideBanner);
    prevButtonBanner.addEventListener('click', prevSlideBanner);

    setInterval(nextSlideBanner, 3000); // Altera o slide a cada 3 segundos
});

// Função para navegar entre os itens
document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.lancamentos .carousel-container');
    const itens = document.querySelectorAll('.lancamentos .item-lancamento');
    const prevButton = document.querySelector('.lancamentos .prev_itens');
    const nextButton = document.querySelector('.lancamentos .next_itens');

    let startIndex = 0;
    const itemsPerPage = 6;

    function nextItem() {
        startIndex++;
        if (startIndex + itemsPerPage > itens.length) {
            startIndex = 0;
        }
        updateSliderItens();
    }

    function prevItem() {
        startIndex--;
        if (startIndex < 0) {
            startIndex = itens.length - itemsPerPage;
        }
        updateSliderItens();
    }

    function updateSliderItens() {
        for (let i = 0; i < itens.length; i++) {
            if (i >= startIndex && i < startIndex + itemsPerPage) {
                itens[i].style.display = 'block';
            } else {
                itens[i].style.display = 'none';
            }
        }
    }

    nextButton.addEventListener('click', nextItem);
    prevButton.addEventListener('click', prevItem);

    // Exibir os primeiros itens
    updateSliderItens();
});


// Função para navegar entre os itens de mais vendidos
document.addEventListener('DOMContentLoaded', function() {
    const carouselContainerVendidos = document.querySelector('.mais-vendidos .carousel-container');
    const itensVendidos = document.querySelectorAll('.mais-vendidos .item-vendidos');
    const prevButtonVendidos = document.querySelector('.mais-vendidos .prev_itens');
    const nextButtonVendidos = document.querySelector('.mais-vendidos .next_itens');

    let startIndexVendidos = 0;
    const itemsPerPageVendidos = 6;

    function nextItemVendidos() {
        startIndexVendidos++;
        if (startIndexVendidos + itemsPerPageVendidos > itensVendidos.length) {
            startIndexVendidos = 0;
        }
        updateSliderItensVendidos();
    }

    function prevItemVendidos() {
        startIndexVendidos--;
        if (startIndexVendidos < 0) {
            startIndexVendidos = itensVendidos.length - itemsPerPageVendidos;
        }
        updateSliderItensVendidos();
    }

    function updateSliderItensVendidos() {
        for (let i = 0; i < itensVendidos.length; i++) {
            if (i >= startIndexVendidos && i < startIndexVendidos + itemsPerPageVendidos) {
                itensVendidos[i].style.display = 'block';
            } else {
                itensVendidos[i].style.display = 'none';
            }
        }
    }

    nextButtonVendidos.addEventListener('click', nextItemVendidos);
    prevButtonVendidos.addEventListener('click', prevItemVendidos);

    // Exibir os primeiros itens
    updateSliderItensVendidos();
});
