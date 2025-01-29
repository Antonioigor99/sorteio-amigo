let amigos = [];
function adicionar() {
  let nomeAmigo = document.getElementById("nome-amigo");
  let listaAmigos = document.getElementById("lista-amigos");

  if (amigos.includes(nomeAmigo.value)) {
    alert('Nome já adicionado!');
    nomeAmigo.value = "";  
    return;
    }else{
        if (nomeAmigo.value == "") {
            alert("Informe erro do amigo!");
            return;
        } else {
            amigos.push(nomeAmigo.value);
            if (listaAmigos.textContent == "") {
              listaAmigos.textContent = nomeAmigo.value.toUpperCase();
            } else {
              listaAmigos.textContent = listaAmigos.textContent + ", " + nomeAmigo.value.toUpperCase();
            }
        }
    }
    nomeAmigo.value = "";     
}
function sortear() {
  if (amigos.length < 4) {
    alert("Adicione pelo menos 4 pessoas");
    return;
  } else {
    embaralhar(amigos);
    let Sorteio = document.getElementById("lista-sorteio");
    for (let i = 0; i < amigos.length; i++) {
      if (i == amigos.length - 1) {
        Sorteio.innerHTML =
          Sorteio.innerHTML + amigos[i] + " --> " + amigos[0] + "<br>";
      } else {
        Sorteio.innerHTML =
          Sorteio.innerHTML + amigos[i] + " --> " + amigos[i + 1] + "<br>";
      }
    }
  }
}
function embaralhar(lista) {
  for (let i = lista.length; i; i--) {
    const indiceAleatorio = Math.floor(Math.random() * i);
    [lista[i - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[i - 1],
    ];
  }
}
function reiniciar() {
  amigos = [];
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("lista-sorteio").innerHTML = "";
}
