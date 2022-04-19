//Generar aleatoriamente una quiniela de n columnas. Supóngase que las probabilidades son: 
//➔ 50% para que salga 1 
//➔ 30% para que salga x 
//➔ 20% para que salga 2 

for (var i=0; i<15;i++){
    
    var numero = Math.floor(Math.random()*10);
    if(numero>=0 && numero<5){
        document.write("-1-");
    } else if(numero>=5 && numero<8){
        document.write("-x-");
    } else {
        document.write("-2-");
    }
    document.write(" <br>");
}


