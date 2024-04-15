// Parte das ofertas
const produtos_ofertas = [
    { nome: "Oferta 1", imagem: "../imgs/produtos/mais_vendidos1.svg", descricao: "Oferta 1", preco: "R$ 1,00" },
    { nome: "Oferta 2", imagem: "../imgs/produtos/mais_vendidos2.svg", descricao: "Oferta 2", preco: "R$ 2,00" },
    { nome: "Oferta 3", imagem: "../imgs/produtos/mais_vendidos3.svg", descricao: "Oferta 3", preco: "R$ 3,00" },
    { nome: "Oferta 4", imagem: "../imgs/produtos/mais_vendidos4.svg", descricao: "Oferta 4", preco: "R$ 4,00" },
    { nome: "Oferta 5", imagem: "../imgs/produtos/mais_vendidos5.svg", descricao: "Oferta 5", preco: "R$ 5,00" },
    { nome: "Oferta 6", imagem: "../imgs/produtos/mais_vendidos6.svg", descricao: "Oferta 6", preco: "R$ 6,00" },
];

// Função para criar um bloco de produto HTML
function criarProdutoHTML_ofertas(produto) {
    const produtoHTML_ofertas = `
        <div class="produto">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <div class="produto-header">
                <h2>${produto.nome}</h2>
                <button class="favoritar-btn"><img src="../imgs/icons/coracao.svg" alt="Favoritar"></button>
            </div>
            <p>${produto.descricao}</p>
            <span>${produto.preco}</span>
        </div>
    `;
    return produtoHTML_ofertas;
}

// Função para adicionar produtos ao HTML
function adicionarProdutosAoHTML_ofertas() {
    const produtosContainer = document.getElementById("produtos");
    produtos_ofertas.forEach(produto => {
        const produtoHTML_ofertas = criarProdutoHTML_ofertas(produto);
        produtosContainer.insertAdjacentHTML("beforeend", produtoHTML_ofertas);
    });
}


// Parte dos lançamentos
const produtos_lancamento = [
    { nome: "Lançamento 1", imagem: "../imgs/produtos/lancamento1.svg", descricao: "Lançamento 1", preco: "R$ 1,00" },
    { nome: "Lançamento 2", imagem: "../imgs/produtos/lancamento2.svg", descricao: "Lançamento 2", preco: "R$ 2,00" },
    { nome: "Lançamento 3", imagem: "../imgs/produtos/lancamento3.svg", descricao: "Lançamento 3", preco: "R$ 3,00" },
    { nome: "Lançamento 4", imagem: "../imgs/produtos/lancamento4.svg", descricao: "Lançamento 4", preco: "R$ 4,00" },
    { nome: "Lançamento 5", imagem: "../imgs/produtos/lancamento5.svg", descricao: "Lançamento 5", preco: "R$ 5,00" },
    { nome: "Lançamento 6", imagem: "../imgs/produtos/lancamento6.svg", descricao: "Lançamento 6", preco: "R$ 6,00" },
];

// Função para criar um bloco de produto HTML
function criarProdutoHTML_lancamento(produto) {
    const produtoHTML_lancamento = `
        <div class="produto">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <div class="produto-header">
                <h2>${produto.nome}</h2>
                <button class="favoritar-btn"><img src="../imgs/icons/coracao.svg" alt="Favoritar"></button>
            </div>
            <p>${produto.descricao}</p>
            <span>${produto.preco}</span>
        </div>
    `;
    return produtoHTML_lancamento;
}

// Função para adicionar produtos ao HTML
function adicionarProdutosAoHTML_lancamento() {
    const produtosContainer = document.getElementById("produtos");
    produtos_lancamento.forEach(produto => {
        const produtoHTML_lancamento = criarProdutoHTML_lancamento(produto);
        produtosContainer.insertAdjacentHTML("beforeend", produtoHTML_lancamento);
    });
}

// Função para mostrar/ocultar as opções de seleção
function toggleOptions(id) {
    const selectContainer = document.getElementById(id);
    selectContainer.querySelector('.options').classList.toggle('show');
}

// Função para ordenar os produtos
function ordenar(tipo) {
    // Aqui você pode implementar a lógica para ordenar os produtos
    console.log('Ordenar por:', tipo);
}

