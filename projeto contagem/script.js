function Contar() {
    inicio = document.getElementById('ini')
    fim = document.getElementById('fim')
    pas = document.getElementById('pas')
    res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
    }
    else {
        res.innerHTML = 'contando: <br> '
        i = Number(inicio.value)
        f = Number(fim.value)
        p = Number(pas.value)
        if (p <= 0 ) {
            window.alert('Passo invalido!, considerando Passo 1')
            p = 1
        }
        if (i < f) {
            for (c = i; c <= f ; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        else {
            for (c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }      
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}