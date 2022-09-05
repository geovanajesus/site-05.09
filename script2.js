function media(){
    var nota1 = Number(document.getElementById("nota1").value)
    var nota2 = Number(document.getElementById("nota2").value)
    var nota3 = Number(document.getElementById("nota3").value)
    var nota4 = Number(document.getElementById("nota4").value)
    
    var media = (nota1 + nota2 + nota3 + nota4 ) /2


    if (media >= 7)
    if (media == 10)
    alert("Uau! Aprovado com exceleêencia")
    else
    alert("Parabens, aprovado! Media" + media )
    else
    alert("Reprovado!")
}