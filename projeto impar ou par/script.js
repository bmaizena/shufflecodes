
pcres = document.getElementById('pc')
imPar = document.getElementById('imPar')
res = document.getElementById('res')
resimp = document.getElementById('resimp')

function gerar(){
    n = Number(document.getElementById('num').value)
    pcramd = Math.floor(Math.random()* 11);
    soma = n + pcramd
    tot = 0
    if (n < 0 || n > 10 || imPar.value != 'p' && imPar.value != 'P' && imPar.value != 'i' && imPar.value != 'I') {
        pcres.innerHTML=('inválido, digite novamente')
        res.innerHTML = ''
        resimp.innerHTML =''
    }
    else {
        res.innerHTML = ''
        resimp.innerHTML =''
        pcres.innerHTML = `Você jogou ${n} e o Computador jogou ${pcramd}. Total de ${soma}`
        if (imPar.value == 'p' || imPar.value == 'P') {
            if (soma % 2 == 0) {
                resimp.innerHTML += 'Deu Par'
                res.innerHTML += 'VOCÊ GANHOU'
                tot += 1
                
            }
            else {
                resimp.innerHTML += 'Deu Ímpar'
                res.innerHTML += 'VOCÊ PERDEU'
            }
        }
        
        else if (imPar.value == 'i' || imPar.value == 'I') {
            if (soma % 2 == 1) {
                resimp.innerHTML += 'Deu Ímpar'
                res.innerHTML += 'VOCÊ GANHOU'
                tot +=1
            }
            else {
                resimp.innerHTML += 'Deu Par'
                res.innerHTML += 'VOCÊ PERDEU'
            }
        }
    }
 } 




    



