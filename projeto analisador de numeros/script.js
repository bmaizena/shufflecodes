num = document.getElementById('txtn')
lista = document.getElementById('txtlista')
res = document.getElementById('res')
valores = []

function isnumero(n) {
    if (Number(n) >=1 && Number(n) <= 100) {
        return true
    }
    else {
        return false
    }
        
}

function inlista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }
}

function adicionar() {
    if(isnumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML =''
    }
    else {
        window.alert('Valor Invalido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
    
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('adicione valores antes de finalizar')
    }
    else {
        tot = valores.length
        maior = valores[0]
        menor = valores[0]
        soma = 0
        for (pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor) 
                menor = valores[pos]           
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

    }
}