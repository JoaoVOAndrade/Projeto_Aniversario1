//mostrar o qr code correto
function show(id) {
  document.getElementById(id).style.display = "block";
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}

//copiar o codigo
function copyToClipboard1() {
  navigator.clipboard
    .writeText(document.querySelector("#copy1").value)
    .then(() => {
      alert("Copiado com Sucesso!");
    });
}

function copyToClipboard2() {
  navigator.clipboard
    .writeText(document.querySelector("#copy2").value)
    .then(() => {
      alert("Copiado com Sucesso!");
    });
}

function copyToClipboard3() {
  navigator.clipboard
    .writeText(document.querySelector("#copy3").value)
    .then(() => {
      alert("Copiado com Sucesso!");
    });
}
