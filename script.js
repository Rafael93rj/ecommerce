const select = document.querySelector('#regiao');
const respostaUm = document.querySelector('#respostaUm');
const respostaDois = document.querySelector('#respostaDois');
const respostaTres = document.querySelector('#respostaTres');
const itemAdd = document.querySelector('#itemAdd')
const botaoCarrinho = document.querySelector('#carrinho')

itemAdd.style.display = 'none'

function carrinho() {
    itemAdd.style.display = 'flex'

    setTimeout(function() {
        itemAdd.style.display = 'none';
    }, 3000);
}

select.addEventListener('change', () => {
    switch (select.value) {
        case 'vazio':
            vazio.style.display = 'block'
            respostaUm.style.display = 'none'
            respostaDois.style.display = 'none'
            respostaTres.style.display = 'none'
            break;
        case 'Norte':
            respostaUm.style.display = 'block'
            respostaDois.style.display = 'none'
            respostaTres.style.display = 'none'
            break;
        case 'Nordeste':
            respostaUm.style.display = 'none'
            respostaDois.style.display = 'block'
            respostaTres.style.display = 'none'
            break;
        case 'Sudeste':
            respostaUm.style.display = 'none'
            respostaDois.style.display = 'none'
            respostaTres.style.display = 'block'
            break;
    }
})