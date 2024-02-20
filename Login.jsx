import {
txtLogin,
txtSenha
} from '../App';


var login = "teste";
var senha = "teste";


//var txtLogin = document.getElementById("txtLogin");
//var txtSenha = document.getElementById("txtSenha");


export const fazerLogin = (e) => {
    if(txtLogin.current.value == login && txtSenha.value == senha){
        console.log("acesso liberado");
    
    } else {
        console.log("login ou senha inválidos");
    }
}














































































