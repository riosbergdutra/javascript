function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){ // condição
        res.innerHTML = 'Impossivel contar!' //innerHTML é que vai ser escrito em html que neste caso é o res de resultado
        window.alert('[ERRO] Faltam dados!') // se der errado vai aparecer isto se não
    } else {
       res.innerHTML = 'Contando: <br>'
       var i = Number(ini.value) // valores de i, f, p
       var f = Number(fim.value)
       var p = Number(passo.value)
       if(p <= 0){
        window.alert(`Passo inválido! Considerando PASSO 1`)
        p = 1
       }
       if(i < f){
        // Contagem crescente
        for (var c = i; c <= f; c += p){
            res.innerHTML += ` ${c} `
           }
           res.innerHTML += `\u{1f3c1}` // emoji
       } else {
        // Contagem regressiva
            for(var c = i; c >= f; c-=p){
             res.innerHTML += ` ${c} `
            }
            res.innerHTML += `\u{1f3c1}` // isto é usado para emoji
       }
      
    }
}
