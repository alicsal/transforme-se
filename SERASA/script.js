/* 
a variavel constante recebe do documento o elemento cujo
id é contact
*/
const menuContact = document.getElementById("contact");

/* arrow function
()=>{

}
*/

menuContact.addEventListener("click", () =>{
    alert("Olá mundo");
} );

let email = '';
/*function setEmail(value){
    email = value;
    console.log(email)
}
*/
function setEmail(event){
    if(event.key.length == 1){
        email = event.target.value + event.key
    }else if(event.key == 'Backspace'){
        email = event.target.value.slice(0, -1);
    }
    console.log(email);
}

function handleRegister(){
    if( email.length == 0 ){ //esta vazio?
        showToast("Se ta me lascando!");
    }else{
        showToast("Email cadastro com sucesso.");
    }
}


function showToast(msg){
    const toast = document.getElementsByClassName('toast')[0];    
    toast.classList.remove('hidden');

    const pToast = document.getElementById('toast');
    pToast.textContent = msg;

    //setTimeout( primeiro uma funçã , tempo);

    setTimeout( () => {
        toast.classList.add('hidden');
        pToast.textContent = '';
    } , 5000);
}

/*
let vetor = [
    {
        chave:"valor"
    },
    {
        chave:"valor"
    }
]
*/

let portifolio = [ //vetor
    { //objeto
        title: "Sistema Financeiro",
        description: "App para controle de gastos pessoais."
    },
    {
        title: "Portfólio Web",
        description: "Site pessoal usando HTML, CSS e JS."
    },
    {
        title: "API Node",
        description: "Backend REST com Node.js."
    }
]

function listPortifolio(){//declaração
    const divPortifolio = document.getElementById("my-portifolio")

    portifolio.map( p => {
        //criando os elementos
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        let paragrafo = document.createElement("p");

        //colocando os textos no elementos
        h3.textContent = p.title;
        paragrafo.textContent = p.description;

        //amarrando os elmento no div
        div.appendChild(h3);
        div.appendChild(paragrafo);

        //amarrando div na area dele
        divPortifolio.appendChild(div);
    });
}

listPortifolio();//execução