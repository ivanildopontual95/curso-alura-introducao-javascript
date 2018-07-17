/*var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";*/

var pacientes = document.querySelectorAll(".paciente");
//console.log(pacientes);

for(var i = 0; i < pacientes.length ; i++){
    //console.log(pacientes[i]);

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    //console.log(tdPeso);
    var peso = tdPeso.textContent;
    //console.log(peso);

    var tdAltura = paciente.querySelector(".info-altura");
    //console.log(tdAltura);
    var altura = tdAltura.textContent;
    //console.log(altura);

    // selecionando a coluna do IMC
    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true; // assumindo de boa fé que o peso é válido
    var alturaEhValida = true; // assumindo de boa fé que a altura é válida

    if(peso <= 0 || peso >= 1000) {
        //console.log("Peso Inválido!");
        pesoEhValido = false;
        //alert("Peso Inválido!");
        tdPeso.textContent = "Peso Inválido!";
        //tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3.00) {
        //console.log("Altura Inválida!");
        alturaEhValida = false;
        //alert("Altura Inválida!");
        tdAltura.textContent = "Altura Inválida!";
        //tdImc.textContent = "Altura Inválida!";
        //paciente.style.backgroundColor = "orange";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
        tdImc.textContent = calculaImc(peso, altura);
    }else {
        tdImc.textContent = "Altura e/ou Peso Inválidos!";
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura); // 100 / 2.0 * 2.0 = 100 / 4 =>>>>> 25
    return imc.toFixed(2);
}

/*titulo.addEventListener("click", function(){ // função anônima
    console.log("Olha, só posso chamar uma função anônima!");
});

titulo.addEventListener("click", mostraMensagem){ // função nomeada #1
    console.log("Olha, só posso chamar uma função anônima!");
});

function mostraMensagem(){ //função nomeada #2
    console.log("Olá, eu fui clicado!");
}*/