function calcular() {
    casa = Number(document.getElementById('valorcasa').value)
    sal = Number(document.getElementById('salario').value)
    anos = Number(document.getElementById('anos').value)
    res = document.getElementById('res')
    fim =document.getElementById('fim')
    meses = (anos * 12)
    prest = casa / meses
    x = (sal * 0.3)
    res.innerHTML =''
    fim.innerHTML=''
    if (casa == '' || sal == '' || anos == '') {
        window.alert('faltam dados!, digite novamente')
    }
    else {
        res.innerHTML += `para pegar uma casa de R$${casa} em ${anos} anos, serão ${meses} prestacões de R$${prest.toFixed(2)}`
        if (prest < x) {
            fim.innerHTML += 'EMPRÉSTIMO CONCEDIDO'
        }
        else {
            fim.innerHTML += 'EMPRÉSTIMO NEGADO'
        }
    }

}