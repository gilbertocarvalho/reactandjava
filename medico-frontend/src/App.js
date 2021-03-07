import axios from "axios";


function RetornaBotao(){
     
       return(<input type='button' value='enviar' id='borao' onClick={Medicos}/>);



        

}


f
unction Cabecalho(){

      return (<p>Bem vindo ao sistema</p>);

}

function Medicos(){

           axios.get('http://localhost:8080/p/medico',{responseType : 'json',}).then(

              (response)=> {

                console.log(response.data)
              }
           );

            console.log("Medico Adicionados"); 

}


function RetornaValor(){

          return (
           <div>
             {Cabecalho() }
          <p>  paragrafo 1  </p>
            {RetornaBotao()}
            </div>
          );
          

        }
        
        export default RetornaValor;