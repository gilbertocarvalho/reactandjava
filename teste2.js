//exemplos de function e arrow function


/*if(0==false && false==[]&& ""==[] && 0=='0'){

   console.log("São iguais");

}*/ 

/*function FazAlgo(tarefa){

        console.log("fazendo " + tarefa);


}*/





 

  



const  FazAlgo = (tarefa) => {

     console.log("Fazendo " + tarefa);
}

/*const quadrado =  (numero) => {

        return n*n;
};*/

const quadrado = n => n*n;


function somar(n1,n2){

            return n1 +n2;
}

function multiplicar(n1,n2){

         return n1 * n2;
}

function calcular(n1,n2 ,operacao){

    return operacao(n1,n2);

}

let resultado = calcular(5,7,(n1,n2) =>{ return n1 - n2;});

console.log("subtração : " , resultado)

console.log("Soma : " ,calcular(5,7,somar));

console.log("Multiplicar :" , multiplicar(5,7));

FazAlgo("nada");


FazAlgo("Atividade");

FazAlgo("Descansar")
