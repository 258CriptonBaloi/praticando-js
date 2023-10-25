var frutas = ["Abacate", "Abacaxi", "Acai", "Amora", "Cereja", "Figo"];

//Contar a quantidade de itens no array
console.log("A quantidade de itens no array e: " + frutas.length);

//Acessar uma posicao do array
console.log("O primeiro item do array e: " + frutas[0]);
console.log("O Terceiro item do array e: " + frutas[2]);

//Acessar a ultima possicao do array
console.log("Ultimo item do array e: " + frutas[frutas.length - 1]);

//Adicionar um item no fim do array
frutas.push("Maca");

//Adicionar um item a primeira posicao do array
frutas.unshift("Kiwi");

//Remover um item no fim do array
frutas.pop();

//Remover um item na primeira posicao do array
frutas.shift();

//Remover n item a partir de uma posicao do array
frutas.splice(2,1);

//Ler o array completo
frutas.forEach(function (item, indice, array) {
    console.log(item, indice);
})
