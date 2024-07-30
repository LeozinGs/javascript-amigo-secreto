let amigos = [];

function adicionar() {

    let nome = document.getElementById('nome-amigo').value;

    if (document.getElementById('nome-amigo').value == '') {

        alert('Digite um nome no campo "Nome do amigo"!');

    } else {

        if (amigos.includes(nome.charAt(0).toUpperCase() + nome.slice(1))) {

            alert('O nome ja está incluido na lista de amigos.');

        } else {

            amigos.push(nome.charAt(0).toUpperCase() + nome.slice(1));

            document.getElementById('nome-amigo').value = '';
            document.getElementById('lista-amigos').innerHTML = amigos;

        }

    }

}

function sortear() {

    embaralha(amigos);

    let listaSorteio = document.getElementById('lista-sorteio');

    if (amigos.length == 1) {

        alert('Adicione mais amigos para iniciar o sorteio.');

    } else {

        for (let i = 0; i < amigos.length; i++) {

            if (i == amigos.length - 1) {

                listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';

            } else {

                listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';

            }

        }

    }

}

function reiniciar() {

    limparCampo();

}

function limparCampo() {

    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';

    amigos = [];

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}