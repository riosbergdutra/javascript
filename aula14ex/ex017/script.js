function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0) {
       window.alert('Por favor, digite um número!')
    } else {
       let n = Number(num.value)
       let c = 1
       tab.innerHTML = ''
       while (c <= 10) {
            let item = document.createElement('option') // isto é usado para criar elementos como no exemplo é option
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item) // está dizendo que no componente filho vai ter o itens que é a criação do option
            c++    //repetidor
       }
    }
    
}