let amigos = []
function adicionar() {
  let campoNomeAmigo = document.getElementById('nome-amigo')
  let nomeAmigo = campoNomeAmigo.value
  incluirAmigo(nomeAmigo)
  campoNomeAmigo.value = ''
}

function incluirAmigo(nomeAmigo) {
  amigos.push(nomeAmigo)

  let campoAmigos = document.getElementById('lista-amigos')
  if(campoAmigos.textContent != '') {
    campoAmigos.textContent += `, ${nomeAmigo}`
  } else {
    campoAmigos.textContent = nomeAmigo
  }
}

function embaralhar(lista) {
  for (let indice = lista.length; indice; indice--) {
      const indiceAleatorio = Math.floor(Math.random() * indice);
      [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
  }
}
