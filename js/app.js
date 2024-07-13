let amigos = []
function adicionar() {
  let campoNomeAmigo = document.getElementById('nome-amigo')
  let nomeAmigo = campoNomeAmigo.value
  incluirAmigo(nomeAmigo)
  campoNomeAmigo.value = ''
}

function sortear() {
  embaralhar(amigos);
  let sorteio = document.getElementById('lista-sorteio')

  for(let i = 0; i < amigos.length; i++) {
    if(i == amigos.length - 1) {
      sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br>'
    } else {
      sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br>'
    }
  }
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
