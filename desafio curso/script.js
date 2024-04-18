numRegitro = document.getElementById('numRegistro')
regPagina = document.getElementById('regPagina')
pagSelecionada = document.getElementById('pagSelecionada')

function Gerar() {
    
    numeroPaginas = Math.ceil(numRegistro.value / regPagina.value)
    
    pagina = 1

    inicio = (pagina * regPagina.value) - regPagina.value

    if (pagSelecionada.value > numeroPaginas)
        window.alert('pagina selecionada inválida')
    else {
        regPagSelecionada.innerHTML += `Página Selecionada: ${pagSelecionada.value}`
        totNumPagina.innerHTML += `Total de Páginas: ${numeroPaginas}`
        totRegistro.innerHTML += `Total de Registro: ${numRegistro.value}`
        totRegPagina.innerHTML += `Registro por Página: ${regPagina.value}`
        pagIni.innerHTML += `Pagina Inicial: ${inicio+1}`
        pagFinal.innerHTML += `Pagina Final: ${numeroPaginas}`

    
    }
    



}