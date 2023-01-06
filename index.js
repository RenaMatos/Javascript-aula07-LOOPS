
// Lista de produtos
let produtos = [
    {
        codigo: 1,
        validade: new Date('2050-07-07')// criando uma datya em javascript

},
{
        codigo: 2,
        validade: new Date('2050-08-08')
},
{
    codigo: 3,
    validade: new Date('2050-08-08')// criando uma datya em javascript

},
{
    codigo: 4,
    validade: new Date('2050-08-08')
},
{
    codigo: 5,
    validade: new Date('2050-06-08')
}
];




// Veerificar a validade de cada prosuto da lista

for(let i = 0; i < produtos.length; i++) {
    if(produtos[i].codigo ==1){
        continue; //pular o resto do codigo dentro do por i
    }
    if(produtos[i].validade < new Date('2050-08-01')){
        console.log('Codigo ' + produtos[i].codigo + ': Produto Vencido' );
        //break;//parar imediatamente
    } else{
        console.log('Codigo ' + produtos[i].codigo + ': Produto dentro do prazo de Validade');
    }
}

