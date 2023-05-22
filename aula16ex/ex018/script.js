let num = document.getElementById('fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] // array

function isNumero(n) {
    if(Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
} // este (n) é um parâmetro está dizendo que n precisa ser maior que 1 e menor que 100 ent ele vai retornar o valor que vai ser verdadeiro ou falso   

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) { // indexOf pode ser usado para realizar pesquisas em arrays e verificar se um elemento está presente em determinada posição.
        return true
    } else {
        return false
    }
    // assim como (n) o l se aplica no mesmo sentido
    // indexOf busca elementos em array
}

function adicionar() {
    if(isNumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value)) // push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array
        let item = document.createElement('option') // cria o elemento option
        item.text = `Valor ${num.value} adicionado` // quantos dados foram 
        lista.appendChild(item) // vai receber no coponente filho
        res.innerHTML = '' 
    } else {
        window.alert('Valor inválido ou já encontrado na lista') // se der er
    }
    num.value = ''
    num.focus() // focus() faz com que o cursor de texto e a janela role até onde o elemento HTML do DOM está localizado.
}

function finalizar() {
    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length // vai verificar o  quantos numeros tem
        let maior = valores [0] // qual é o maior valor da array
        let menor = valores [0] // qual é o menor valor da array
        let soma = 0 // vai fazer uma soma total entre os valores
        let media = 0 // media dos valores
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}
