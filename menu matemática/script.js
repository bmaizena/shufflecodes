
somar = document.getElementById('somar')
multiplicar = document.getElementById('multiplicar')
divisao = document.getElementById('divisao')
maior = document.getElementById('maior')
res = document.getElementById('res')

function gerar() {
    res.innerHTML =''
    n1 = Number(document.getElementById('numero1').value)
    n2 = Number(document.getElementById('numero2').value)
    if (n1 == false || n2 == false) {
        window.alert ('Está faltando algum número, digite novamente')
    }
    else {
        if (somar.checked == true) {
            soma = n1 + n2 
            res.innerHTML += `A soma entre ${n1} e ${n2} é ${soma}`
        }
        else if (multiplicar.checked == true) {
            multi = n1 * n2 
            res.innerHTML += `A multiplicação entre ${n1} e ${n2} é ${multi}`
        }
        else if (divisao.checked == true) {
            div = n1 / n2 
            res.innerHTML += `A divisão entre ${n1} e ${n2} é ${div.toFixed(2)}`
        }
        else {
            if (n1 > n2) {
                res.innerHTML += `O número ${n1} é maior que o número ${n2}`
            }
            else if (n2 > n1) {
                res.innerHTML += `O número ${n2} é maior que o número ${n1}`
            }
            else {
                res.innerHTML += `Os dois números digitados são iguais`
            }
        }

}
}