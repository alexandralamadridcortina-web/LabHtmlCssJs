let contador = 0;

const contadorElemento = document.getElementById("contador");
const btnIncrementar = document.getElementById("incrementar");
const btnDecrementar = document.getElementById("decrementar");

btnIncrementar.addEventListener("click", () => {
  contador++;
  actualizarContador();
});

btnDecrementar.addEventListener("click", () => {
  contador--;
  actualizarContador();
});

function actualizarContador() {
  contadorElemento.textContent = contador;

  // Cambiar color si es múltiplo de 10 y diferente de 0
  if (contador !== 0 && contador % 10 === 0) {
    contadorElemento.style.color = "red";
  } else {
    contadorElemento.style.color = "#333";
  }
}
