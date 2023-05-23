var urlAtual = window.location.href
var urlClass = new URL(urlAtual)

var nome = urlClass.searchParams.get("nome");
var NascimentoTexto = urlClass.searchParams.get("nascimento");
var sobre = urlClass.searchParams.get("sobre");
var Informaçoes = urlClass.searchParams.get("Informaçoes");
var ContatoTexto = urlClass.searchParams.get("site");
var cargo = urlClass.searchParams.get("cargo");
var empresa = urlClass.searchParams.get("empresa");
var inicio = urlClass.searchParams.get("inicio");
var descricao = urlClass.searchParams.get("descricao");
var habilidadesTexto = urlClass.searchParams.get("habilidade");
console.log("a")

let tags = ['h1', 'h3', 'h5', 'div', 'img', 'p', 'span', 'ul', 'li'];
let listaTags = [];
let body = document.querySelector('body');

// criei as 3 tags: div, img e p
tags.forEach(tag => {
  let tagNova = criarTags(tag);
  listaTags.push(tagNova);
});

listaTags[0].textContent = nome;
listaTags[1].textContent = cargo;

// adicionei a div no DOM
body.appendChild(listaTags[2]);
listaTags[0].classList.add('title');
listaTags[1].classList.add('titlep');

// incluindo na div a tag img e a p
listaTags[2].classList.add('texto');
listaTags[2].appendChild(listaTags[0]);
listaTags[2].appendChild(listaTags[1]);

// Adicione o ícone RocketChat
listaTags[2].appendChild(listaTags[5]);
listaTags[5].classList.add('material-symbols-outlined');
listaTags[5].textContent = "chat";
listaTags[2].appendChild(listaTags[0]);
listaTags[2].appendChild(listaTags[1]);

// sobre mim
let container = new criarTags('div')
let cima = criarTags('div')
let novaTag = criarTags('h1');
novaTag.textContent = 'Sobre mim';
body.appendChild(container);
container.classList = 'container'
container.appendChild(cima)
cima.appendChild(novaTag)
cima.classList = "cima"

let novoH5 = criarTags('h5');
novoH5.innerHTML = sobre;
novoH5.classList.add('small');
cima.appendChild(novoH5);

// Adiciona o novo elemento h3 como um filho do elemento "Sobre Mim"
novaTag.appendChild(novoH5);

let novaTagH1 = criarTags('h1');
novaTagH1.textContent = 'Data de Nascimento:';
cima.appendChild(novaTagH1);

let Nascimento = criarTags('h5')
Nascimento.textContent = NascimentoTexto; 
cima.appendChild(Nascimento);

// Habilidades
let novaTagH1 = criarTags('h1');
novaTagH1.textContent = 'Habilidades';
cima.appendChild(novaTagH1);

// Lista de habilidades
let habilidades = criarTags('h5')
habilidades.textContent = habilidadesTexto; 
cima.appendChild(habilidades);


// Outras Informações
let novaTagH2 = criarTags('h1');
novaTagH2.textContent = 'Outras Informações';
cima.appendChild(novaTagH2);

let novoH4 = criarTags('h5');
novoH4.innerHTML = Informaçoes;
novoH4.classList.add('small');
cima.appendChild(novoH4);

// Contato
let novavTag = criarTags('h1');
novavTag.textContent = 'Contato';
cima.appendChild(novavTag);

let Contato = criarTags('h5')
Contato.textContent = ContatoTexto;
cima.appendChild(Contato);

// Formação
let divFormaCaoAbaixo = criarTags('div')
divFormaCaoAbaixo.classList='formacao'
  let novasTagH1 = criarTags('h1');
novasTagH1.textContent = 'Formação';
container.appendChild(divFormaCaoAbaixo);
divFormaCaoAbaixo.appendChild(novasTagH1)

let novasTagH2 = criarTags('h2');
novasTagH2.textContent = empresa;
divFormaCaoAbaixo.appendChild(novasTagH2)

let novasTagH3 = criarTags('h3');
novasTagH3.textContent = inicio;
divFormaCaoAbaixo.appendChild(novasTagH3)

let novasTagHH3 = criarTags('h5');
novasTagHH3.innerHTML = descricao;
novasTagHH3.classList.add('small');
divFormaCaoAbaixo.appendChild(novasTagHH3);


//Experiêcia

let novasTagHHH = criarTags('h1');
novasTagHHH.textContent = 'Experiência';
divFormaCaoAbaixo.appendChild(novasTagHHH);

let novasTag1 = criarTags('h5');
novasTag1.innerHTML = descricao;
novasTag1.classList.add('small');
divFormaCaoAbaixo.appendChild(novasTag1);

// método fabrica   
function criarTags(tag) {
  let novaTag = document.createElement(tag);
  return novaTag; 
}
