let valor = 100;
let desconto
if (valor >= 200) {
    desconto = 20
    desconto = desconto / 100
    valor = valor * desconto
    console.log(valor);
        
}else if(valor >= 100){
    desconto = 10;
    desconto = desconto /100
    valor = valor * desconto
    console.log(valor);
    
}else{
    console.log("sem desconto");
    
}