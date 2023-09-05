
function Gerar() {
    n = Number(document.getElementById('num').value)
    comp = document.getElementById('computador')
    res = document.getElementById('res')
    eu = document.getElementById('eu')

    if (n == '' || n > 3) {
        window.alert ('JOGADA INVÁLIDA')
    }
    
    else {
        res.innerHTML += ''
        comp.innerHTML += ''
        pc = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        if (pc == 1) {
            comp.innerHTML = 'O Computador Jogou PEDRA'
            if (n == 1) {
                eu.innerHTML= 'Você Também Jogou PEDRA'
                res.innerHTML= 'EMPATE'
            }
            else if (n == 2) {
                eu.innerHTML= 'Você Jogou PAPEL'
                res.innerHTML ='VOCÊ GANHOU'
            }
            else {
                eu.innerHTML= 'Você Jogou TESOURA'
                res.innerHTML = 'COMPUTADOR VENCE'
            }
        }

        else if (pc == 2 ) {
            comp.innerHTML = 'O Computador Jogou PAPEL'
            if (n == 1) {
                eu.innerHTML= 'Você Jogou PEDRA'
                res.innerHTML = 'COMPUTADOR VENCE'
            }
            else if (n == 2) {
                eu.innerHTML= 'Você Também Jogou PAPEL'
                res.innerHTML ='EMPATE'
            }
            else {
                eu.innerHTML= 'Você Jogou TESOURA'
                res.innerHTML = 'VOCÊ GANHOU'
            }
        }

        else if (pc == 3) {
            comp.innerHTML = 'O Computador Jogou TESOURA'
            if (n == 1) {
                eu.innerHTML= 'Você Jogou PEDRA'
                res.innerHTML = 'VOCÊ GANHOU'
            }
            else if (n == 2) {
                eu.innerHTML= 'Você Jogou PAPEL'
                res.innerHTML ='COMPUTADOR VENCE'
            }
            else {
                eu.innerHTML= 'Você Também Jogou TESOURA'
                res.innerHTML = 'EMPATE'
            }
        }

    }
}