let btn = document.getElementsByClassName("btn")[0];
btn.addEventListener("click", notaAnual);


function notaAnual() {
  let nota1 = document.getElementById("nota1").value;
  let nota2 = document.getElementById("nota2").value;
  let nota3 = document.getElementById("nota3").value;
  let nota4 = document.getElementById("nota4").value;
  
  let notas = {
    primeiroBimestre: parseInt(nota1),
    segundoBimestre: parseInt(nota2),
    terceiroBimestre: parseInt(nota3),
    quartoBimestre: parseInt(nota4)
    
  }
  
  let soma = 0;
  
  for (const value in notas) {
    soma += notas[value];
  }

  const notasLen = Object.keys(notas).length
  const media = soma / notasLen;
  
  if (!media) {
    return;
  }

  console.log(media)
  
  const mediaAprovatoria = 6;
  
   if (media < mediaAprovatoria) {
    alert("Status: Reprovado. Sua média foi: " + media);
  } else {
    alert("Status: Aprovado. Sua média foi: " + media);
  }
  
}