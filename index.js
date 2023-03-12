let btn = document.getElementById('menuBtn');
btn.addEventListener('click', () => {

    let nav = document.getElementById('nav');
    nav.classList.toggle('menu-active');

    btn.classList.toggle('menuBtn-active')

    if(btn.classList.contains('menuBtn-active')) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }
});


let lista = [
    {
        nome: 'Advice Generator',
        capa: './assets/adviceGenerator.png',
        dificuldade: 'Fácil',
        localProjeto: 'https://advicegenerator-devlucas.netlify.app/',
        descricao: 'Um Gerador de conselhos consumindo uma API, advice API, você clica no botão e o conselho muda de forma dinâmica. - HTML, CSS, JS, API'
    },
    {
        nome: 'Card Details',
        capa: './assets/cardProject.jpeg',
        dificuldade: 'Intermediário',
        localProjeto: 'https://card-details-devlucas.netlify.app/',
        descricao: 'Um formulário com atualização em tempo real dos dados preenchidos, o usuário deve receber uma mensagem de erro quando algum input estiver faltando ou quando for preenchido com formato errado, você irá treinar muito suas habilidades em DOM no Javascript. - HTML, CSS, JS'
    },
    {
        nome: 'Portfolio',
        capa: './assets/portfolioDesign.png',
        dificuldade: 'Fácil',
        localProjeto: '',
        descricao: 'Um modelo de Portfólio para treinar suas habilidades Front-End, você pode ir além e desenvolver o Portfólio inteiro se quiser, Boa sorte! - HTML, CSS, JS'
    },
    {
        nome: 'Dev Links',
        capa: './assets/devLinksDesign.png',
        dificuldade: 'Fácil',
        localProjeto: '',
        descricao: 'Teste suas habilidades de layout construindo esse Projeto, um site onde tem seus links de serviço ou pessoais. - HTML, CSS'
    },
    {
        nome: 'UIcode Website',
        capa: './assets/UIcodeDesign.png',
        dificuldade: 'Fácil',
        localProjeto: '',
        descricao: 'Um Website com intuito de vender um produto digital, com diversas seções sobre o produto. - HTML, CSS, JS'
    },
    {
        nome: 'To Do App',
        capa: './assets/ToDoApp.png',
        dificuldade: 'Fácil',
        localProjeto: '',
        descricao: 'Um To Do App que possibilita o usuário criar novas tarefas, excluir e ordenar de A-Z. - HTML, CSS, JS, LocalStorage'
    },
]


let divs = [];
let popUp;

lista.forEach(function(value) {
    let divElement = document.createElement('div');
    let h2Element = document.createElement('h2');
    let pElement = document.createElement('p');
    
    divElement.appendChild(h2Element);
    divElement.appendChild(pElement);
    
    h2Element.innerHTML = value.nome
    pElement.innerHTML = value.dificuldade

    if(value.dificuldade === 'Fácil') {
        pElement.style.color = 'rgb(60, 211, 140)'
    }

    if(value.dificuldade === 'Intermediário') {
        pElement.style.color = 'rgb(194, 202, 78)'
    }

    if(value.dificuldade === 'Difícil') {
        pElement.style.color = 'rgb(211, 60, 60)'
    }
    
    divElement.style.backgroundImage = `url(${value.capa})`
    divElement.classList.add('bgProject')

    divElement.addEventListener('click', () => {
        document.body.style.overflow = 'hidden'

        if(popUp) {
            popUp.remove();
        }

        popUp = document.createElement('div');
        let headerPop = document.createElement('header');
        let h2 = document.createElement('h2');
        let btn = document.createElement('button');
        let capa = document.createElement('img');
        let descricao = document.createElement('p');
        let a = document.createElement('a');

        headerPop.classList.add('headerPop');
        btn.classList.add('btnClose');
        popUp.classList.toggle('popUp');
        capa.classList.add('capaPopUp');
        descricao.classList.add('descricaoPopUp');
        a.classList.add('btnProject');

        h2.innerHTML = value.nome
        btn.innerHTML = '<i class="fa-regular fa-circle-xmark fa-2x"></i>'
        btn.title = 'Fechar'
        capa.src = value.capa
        descricao.innerHTML = value.descricao
        a.innerHTML = 'Conhecer Projeto'
        a.href = value.localProjeto
        a.target = '_blank'

        popUp.appendChild(headerPop)
        headerPop.appendChild(h2)
        headerPop.appendChild(btn)
        popUp.append(capa)
        popUp.append(descricao)
        popUp.append(a)

        document.body.appendChild(popUp)
        
        btn.addEventListener('click', () => {
            popUp.remove()
            document.body.style.overflow = 'auto'
        })
    })
    
    document.body.appendChild(divElement);

    divs.push(divElement);
});

let externDiv = document.createElement('div');
externDiv.classList.add('boxProjects');

divs.forEach(function(div) {
    externDiv.appendChild(div)
});

document.body.appendChild(externDiv);