function gerar() {
    num = document.getElementById('txtnum')
    res = document.getElementById('seltab')
    resdiv = document.getElementById('seltabdiv')
    if (num.value.length == 0) {
        window.alert('Por Favor Digite um numero')
    }
    else {
        n= Number (num.value)
        res.innerHTML = ''
        resdiv.innerHTML = ''
        for (c =1; c <=10; c++) {
            item = document.createElement('option')
            itemdiv = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            itemdiv.text = `${n} / ${c} = ${n/c}`
            resdiv.appendChild(itemdiv)
            res.appendChild(item)

        }
    }
}