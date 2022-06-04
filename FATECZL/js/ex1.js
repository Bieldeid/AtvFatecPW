function primeiraFuncao(){
    alert("Hello World");
}

var texto = document.getElementById('res');

function somar(){
    var  a = Number(document.getElementById('a').value);
    var  b = Number(document.getElementById('b').value);   
    var soma =  a+b;
    console.log(soma);
    document.getElementById('res').innerHTML = soma;
}

function validar(){
    /* Declaração de Variável */
    
    /* 
    let = variavel global

    */

    //value = valor do campo nome do formulario cadastro
    let nome = cadastro.nome.value;
    let cpf =  cadastro.cpf.value;
    let email = cadastro.email.value;
    let senha = cadastro.senha.value;
    let confirmar = cadastro.confirmar.value;

    if(nome ==  ""){
        alert("COLOCA O NOME, ANIMAL!");
        cadastro.nome.focus();  
        return false;
    }
    if(cpf ===  ""){
        alert("COLOCA O CPF, ANIMAL!");
        cadastro.cpf.focus();  
        return false;
    }
    if(email ===  ""){
        alert("COLOCA O EMAIL, ANIMAL!");
        cadastro.email.focus();  
        return false;
    }
    if(senha ===  ""){
        alert("COLOCA O SENHA, ANIMAL!");
        cadastro.senha.focus();  
        return false;
    }
    if(confirmar ===  ""){
        alert("CONFIRMA A SENHA, ANIMAL!");
        cadastro.confirmar.focus();  
        return false;
    }
    if(isNaN(cpf)){
        alert("SEU CPF TEM LETRA, ANIMAL?????");
        cadastro.cpf.focus();
        return false;
    }

    if (senha != confirmar){
        alert ("SUAS SENHAS ESTÃO DIFERENTES, ANIMAL!");
        cadastro.confirmar.focus();
        return false;
    }

    if(cpf.length != 11){
        alert("CPF TA INVALIDO ANIMAL");
        cadastro.cpf.focus();
        return false;
    }

    let regex = /^(?=.*?[A-Za-z0-9_])(?=.*?[^\w\s]).{6,10}$/

    /*(?=.*?[A-Z]) - minimo uma letra maiscula.
     (?=.*?[a-z]) - minimo uma letra minuscula.
     (?=.*?[0-9]) - minimo de número.
     (?=.*?[^\w\s]) - minimo de caractere especial.
     .{6.10} - minimo 6, maximo 10 caracteres. */
    
    if(!regex.exec(senha)){
        alert("Senha de uma letra maiuscula, uma minuscula, um numero, um caractere especial");
        cadastro.senha.focus();
        return false;
        
    }
}
