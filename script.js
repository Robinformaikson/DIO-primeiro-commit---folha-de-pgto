function calcularSalario() {
    const nome = document.getElementById("nome").value;
    const cargo = document.getElementById("cargo").value;
    const salario = Number(document.getElementById("salario").value);
    const inss = salario * 0.11;
    const irrf = salario * 0.275;
    const salarioLiquido = salario - inss - irrf;git status
    const resultado = `O salário líquido de ${nome}, que ocupa o cargo de ${cargo}, é de R$ ${salarioLiquido.toFixed(2)}.`;
    document.getElementById("resultado").innerHTML = resultado;
  }
  