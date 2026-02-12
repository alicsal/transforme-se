// a variavel do tipo constante chamada "menuContact" recebe do documento cujo o id é contact
const menuContact = document.getElementById("contact");

menuContact.addEventListener("click", ()=>{
    alert("Não trabalhamos com contato");
});

let email = ""; // colocando a variavel fora, ela pode ser usada em outros lugares 
/*
function setEmail(value){ tudo o que manipula variavel é get(pega) set(põe)
    email = value;
    console.log(email);
}
*/

function setEmail(event){
    if(event.key.length == 1){
        email = event.target.value + event.key
    }else if(
        event.key == 'Backspace'){
            email = event.target.value.slice(0, -1);
        }
        console.log(email);
}

function handleRegister(){
   if(email.length == 0){ //está vazio
        showToast("Coloque um email.");
   }else{
        showToast("email cadastrado com sucesso.");
   }
}

function showToast(msg){
    const toast = document.getElementsByClassName('toast')[0];
    toast.classList.remove('hidden');

    const pToast = document.getElementById('toast');
    pToast.textContent = msg;

    // 1º param eh uma funcao / 2º param eh o tempo
    setTimeout( () => {
        toast.classList.add('hidden');
        pToast.textContent = '';
    }, 5000);


}