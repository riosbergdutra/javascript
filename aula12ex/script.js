var fundo = document.getElementById ('fundo')
var dia = new Date ()
var txt = document.getElementById('texto')
var hora = dia.getHours()
var imagem = document.getElementById('imagem')

if (hora >= 6 && hora < 12) {
    txt.innerHTML = `agora são ${hora} horas`
    imagem.innerHTML = "<img src='imagens/download.jpg'>"
    imagem.style.textAlign = 'center';
    fundo.style.backgroundColor = 'rgb(223, 233, 92)';

} else if (hora >= 12 && hora < 18) {
    txt.innerHTML = `agora são ${hora} horas`
    imagem.innerHTML = "<img src='imagens/download (2).jpg'>"
   imagem.style.textAlign = 'center';
   fundo.style.backgroundColor = 'rgb(223, 169, 93)';
}
 else if (hora >=18  &&  hora <= 24) {
    txt.innerHTML = `agora são ${hora} horas`
    imagem.innerHTML = "<img src='imagens/download (1).jpg'>"
    imagem.style.textAlign = 'center';
    fundo.style.backgroundColor = 'rgb(92, 116, 233)';
}
 else if (hora >= 0 && hora < 6) {
    txt.innerHTML = `agora são ${hora} horas`
    imagem.innerHTML = "<img src='imagens/download (3).jpg'>"
    imagem.style.textAlign = 'center';
    fundo.style.backgroundColor = 'rgb(5, 1, 51)';
}
