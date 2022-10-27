function conversor(){
    let unidade = document.getElementById("unidade").value;
    let metros = document.getElementById("valor").value;
    let resultado; 
    switch (unidade){
        case 'cm':
            resultado = metros*100;
            break;
        case 'dm':
            resultado = metros*10;
            break;
        case 'mm':
            resultado = metros*1000;
            break;
        case 'km':
            resultado = metros/1000;
            break;
        case 'dam':
            resultado = metros/10;
            break;
        case 'hm':
            resultado = metros/100;
            break;
        default :
            resultado = "Por favor selecione outro valor";
    }
    document.getElementById("resultado").style.visibility="visible"
    if(resultado === "Por favor selecione outro valor"){
        document.getElementById("resultado").innerHTML=resultado;
    }else if(!resultado){
        document.getElementById("resultado").innerHTML="Por favor selecione outro valor";
    }
    else{
    document.getElementById("resultado").innerHTML="O resultado é "+ resultado;
    }
}