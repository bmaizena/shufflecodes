function Calcular() {
    n1 = Number(document.getElementById("lado1").value)
    n2 = Number(document.getElementById("lado2").value)
    n3 = Number(document.getElementById("lado3").value)
    res = document.getElementById("res")
    if (n1 < n2 + n3 && n2 < n1 + n3 && n3 < n2 + n1){
        res.innerHTML = ''
        img = document.createElement('img')
        img.setAttribute('id', 'foto')
        res.innerHTML += 'Os segmentos acima FORMAM um triângulo '
        if (n1 != n2 && n1 != n3 && n2 != n3) {
            res.innerHTML += 'ESCALENO <br>'
            img.setAttribute('src', 'triangulo-escaleno.webp')
        }
        else if (n1 == n2 && n1 == n3 && n2 == n3) {
            res.innerHTML += 'EQUILÁTERO <br>'
            img.setAttribute('src', 'triangulo-equilatero.webp')
        }
        else {
            res.innerHTML += 'ISÓSCELES <br>'
            img.setAttribute('src', 'triangulo-isosceles.webp')
        }
        res.appendChild(img)
    }
    else {
        res.innerHTML =''
        res.innerHTML +='Os segmentos acima NÃO FORMAM um triângulo'

    }
}