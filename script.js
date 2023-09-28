const elementos = [];

for (let i = 0; i < 5; i++){
    const nome = prompt("Escreva o nome do elemento");
    elementos.push(nome);
}

elementos.reverse();

for (elemento of elementos){
    console.log(elemento);
}
