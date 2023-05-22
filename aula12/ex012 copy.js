var hora = 25
console.log(`Agora são exatamente ${hora} horas.`);

if (hora >= 6 && hora < 12) {
    console.log('Bom Dia!');
} else if (hora >= 12 && hora < 18) {
    console.log('Boa Tarde!');
} else if (hora >= 18 && hora == 24) {
    console.log('Boa Noite!');
} else if (hora < 6) {
    console.log('Boa Madrugada!');
}
// se refere as datas que dependendo da 'hora' vai ser bom dia!, boa tarde!, boa noite!, boa madrugada!
// && é usado para para adicionar ex: eu quero caneta preta e azul tem que ser as duas
// || é usado para um ou outro sem ser os dois ex: eu quero caneta preta ou azul tem que ser uma das duas e não as duas