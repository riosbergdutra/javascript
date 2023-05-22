let num = [5, 8, 2, 9, 3]
num.push(1) // push adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array neste caso é o numero 1
num.sort() // ordena os elementos do próprio array e retorna o array
console.log(num) // vai exibir o array
console.log (`O vetor tem ${num.length} posições`) // vai dizer quantos arrays contem com length
console.log(`O primeiro valor do vetor é ${num[0]}`) // vai exibir o primeiro array
let pos = num.indexOf(7) // verifica se contem o valor 7 no array
if (pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 está na posição ${pos}`) 
}

