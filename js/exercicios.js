//Exercício 1  
function verificarPositivoNegativo() {

    let element = document.getElementById('exercicio-1');
    let numero = element.querySelector('.campo');

    if (isNaN(numero.value)) {

        alert('Digite um número válido!');

    } else if (numero.value == 0) {

        element.querySelector('.resposta').textContent = `O número ${numero.value} é: Zero`;
        numero.value = '';

    } else {

        numero.value < 0 ? element.querySelector('.resposta').textContent = `O número ${numero.value} é: Negativo` : element.querySelector('.resposta').textContent = `O número ${numero.value} é: Positivo`;
        numero.value = '';

    }

}

//Exercícios 2
function verificarMaiorIdade() {

    let element = document.getElementById('exercicio-2');
    let nome = element.querySelector('.campo1');
    let idade = element.querySelector('.campo2');

    idade.value >= 18 ? element.querySelector('.resposta').textContent = `Olá ${nome.value.charAt(0).toUpperCase() + nome.value.slice(1)}, vejo que você tem ${idade.value} anos, entao você é maior de idade.` : element.querySelector('.resposta').textContent = `Olá ${nome.value.charAt(0).toUpperCase() + nome.value.slice(1)}, vejo que você tem ${idade.value} anos, entao você é menor de idade.`;

    nome.value = '';
    idade.value = '';

}

//Exercício 3
function verificarString() {

    let element = document.getElementById('exercicio-3');
    let string = element.querySelector('.campo');

    if (string.value == '') {

        element.querySelector('.resposta').textContent = 'A string está: Vazia';

    } else {

        element.querySelector('.resposta').textContent = 'A string está: Com conteúdo';

    }

}

//Exercício 4
function verificarAnoBissexto() {

    let element = document.getElementById('exercicio-4');
    let ano = element.querySelector('.campo');

    if (isNaN(ano.value)) {

        alert('Digite um ano válido.');

    } else {

        ano.value % 4 == 0 ? element.querySelector('.resposta').textContent = `O ano ${ano.value} é: Bissexto` : element.querySelector('.resposta').textContent = `O ano ${ano.value} é: Não bissexto`;
        ano.value = '';

    }

}

//Exercício 5
function calcularMedia() {

    let element = document.getElementById('exercicio-5');
    let numero1 = parseInt(element.querySelector('.campo1').value);
    let numero2 = parseInt(element.querySelector('.campo2').value);

    if (element.querySelector('.campo1').value == '' || element.querySelector('.campo2').value == '') {

        alert('Um dos campos não contém um número válido.\nInsira um número válido.');

    } else {

        element.querySelector('.resposta').textContent = `A média dos números ${numero1} e ${numero2} é: ${(numero1 + numero2) / 2}`;

    }

}

//Exercício 6
let array = [];
function adicionar() {

    let element = document.getElementById('exercicio-6');
    let item = element.querySelector('.campo');

    if (item.value == '') {

        alert('Digite algo válido no campo!');

    } else {

        array.push(item.value);

        array.length == 1 ? element.querySelector('.resposta').textContent = `O tamanho da array é de: ${array.length} Item.` : element.querySelector('.resposta').textContent = `O tamanho da array é de: ${array.length} Itens.`;

        item.value = '';

    }

}

function resetar() {

    let element = document.getElementById('exercicio-6');
    let item = element.querySelector('.campo');

    element.querySelector('.resposta').textContent = `O tamanho da array é de: 0 Itens`;
    item.value = '';
    array = [];

}

//Exercicio 7
let array1 = ['pão', 'leite', 'queijo', 'presunto', 'achocolatado', 'manteiga', 'biscoito recheado'];

function verificarPresente() {

    let element = document.getElementById('exercicio-7');
    let item = element.querySelector('.campo');

    if (item.value == '') {

        alert('Digite algo no campo.');

    } else {

        array1.includes(item.value)? element.querySelector('.resposta').textContent = 'O item digitado: Está presente.' : element.querySelector('.resposta').textContent = 'O item digitado: Não está presente.';

        item.value = '';

    }

}