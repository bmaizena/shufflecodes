function Calcular() {
    valor = Number(document.getElementById('valor').value)
    res = document.getElementById('res')
    res2 = document.getElementById('res2')
    jurosparc = Number(document.getElementById('juros').value)
    if (valor == '') {
        window.alert('Nenhum Valor Encontrado')
    }
    else {
        res.innerHTML =''
        res2.innerHTML =''
        if (dinheiro.checked) {
            avista = valor - (valor *0.1)
            res.innerHTML += `sua compra de R$${valor} vai custar R$${avista} no final`
        }
        else if (cartao.checked) {
            avista = valor - (valor * 0.05)
            res.innerHTML += `sua compra de R$${valor} vai custar R$${avista} no final`
        }
        else if (duasvezes.checked) {
            parcela = valor / 2
            res.innerHTML += `sua compra de R$${valor} vai ser parcelada em 2x no valor de R$${parcela}`
        }
        else {
            if (jurosparc == '' || jurosparc > 12) {
                window.alert ('Números de parcelas inválido')
            }
            else {
                if (jurosparc < 6) {
                    juros = valor + (valor * 0.2)
                }
                else {
                    juros = valor + (valor * 0.3)
                }
                    parcela = juros / jurosparc
                    res.innerHTML += `sua compra será parcelada em ${jurosparc}x no valor de R$${parcela.toFixed(2)} COM JUROS`
                    res2.innerHTML += `sua compra de R$${valor} vai custar R$${juros} no final.`
            }
        }
    }
}