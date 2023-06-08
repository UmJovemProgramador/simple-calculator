function calculadora() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var operator = document.getElementById("operator").value;
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultado = document.getElementById("resultado");
  
    if (isNaN(numero1) || isNaN(numero2)) {
      resultado.textContent = "Por favor, insira números válidos.";
      return;
    }
  
    var resultadoOperacao;
  
    switch (operator) {
      case "+":
        resultadoOperacao = numero1 + numero2;
        break;
      case "-":
        resultadoOperacao = numero1 - numero2;
        break;
      case "*":
        resultadoOperacao = numero1 * numero2;
        break;
      case "/":
        resultadoOperacao = numero1 / numero2;
        break;
      default:
        result.textContent = "Operação inválida.";
        return;
    }
  
    resultado.textContent = "Resultado: " + resultadoOperacao;
  }
  
