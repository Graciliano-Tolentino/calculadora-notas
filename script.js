function calcularMedia() {
  const n1 = parseFloat(document.getElementById('nota1').value) || 0;
  const n2 = parseFloat(document.getElementById('nota2').value) || 0;
  const n3 = parseFloat(document.getElementById('nota3').value) || 0;
  const n4 = parseFloat(document.getElementById('nota4').value) || 0;

  const media = (n1 + n2 + n3 + n4) / 4;

  document.getElementById('resultado').textContent = 
    `A média das notas é: ${media.toFixed(2)}`;
}
