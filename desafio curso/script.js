numRegitro = document.getElementById('numRegistro')
regPagina = document.getElementById('regPagina')
pagSelecionada = document.getElementById('pagSelecionada')

function Gerar() {

    numeroPaginas = numRegistro.value / regPagina.value
    
   
    
    if (numeroPaginas == parseFloat(numeroPaginas)) {
        numeroPaginas = (numeroPaginas.toFixed()) + 1
        totNumPagina.innerHTML = `Total de Páginas: ${numeroPaginas}`
        
    }

    else {
        
        totNumPagina.innerHTML = `Total de Páginasss: ${numeroPaginas}`
    }

    






    
    totRegistro.innerHTML += `Total de Registro: ${numRegistro.value}`
    totRegPagina.innerHTML += `Registro por Página: ${regPagina.value}`
    regPagSelecionada.innerHTML += `Página Selecionada: ${pagSelecionada.value}`



}