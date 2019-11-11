var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    var formAdiciona = document.querySelector("#form-adiciona");
    
    var paciente = obterPacienteFormulario(formAdiciona);

    var errors = validaPaciente(paciente); 
    if(errors.length > 0){
        exibeMensagensDeErro(errors);
        return;
    }


    adicionaPaciente(paciente);
    formAdiciona.reset();
    var ul = document.querySelector("#mensagens-de-erro");
    ul.innerHTML = "";


});

function adicionaPaciente(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

function obterPacienteFormulario(form){

    var paciente = {
        peso:form.peso.value,
        altura:form.altura.value,
        nome:form.nome.value,
        gordura:form.gordura.value,
        imc:calculaImc(form.peso.value,form.altura.value)
    };
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

    return pacienteTr;
}

function montaTd(conteudo,classe){
    var elemento = document.createElement("td");
    elemento.textContent = conteudo;
    elemento.classList.add(classe);
    return elemento;
}

function validaPaciente(paciente){
    var errors = []
    if(!validaPeso(paciente.peso)){
        errors.push("Peso Inválido");
    }
    if(!validaAltura(paciente.altura)){
        errors.push("Altura inválida");
    }
    if(paciente.nome.length == 0){
        errors.push("Nome não pode ser em branco");
    }
    if(paciente.gordura.length ==0){
        errors.push("Gordura não pode ser em branco");
    }
    if(paciente.peso.length ==0){
        errors.push("Peso não pode ser em branco");
    }
    if(paciente.altura.length ==0){
        errors.push("Altura não pode ser em branco");
    }
    return errors;
}

function exibeMensagensDeErro(errors){
    var ul = document.querySelector("#mensagens-de-erro");
    ul.innerHTML = "";
    errors.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li)
    });
}