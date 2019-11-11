var filtro = document.querySelector("#filtra-paciente");

filtro.addEventListener("input",function(){
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
    var nomeInput = this.value;
    pacientes.forEach(function(paciente){
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        var expressao = new RegExp(`^${nomeInput}`,"i");
        if(!expressao.test(nome)){
            paciente.classList.add("invisivel");
        }
        else{
            paciente.classList.remove("invisivel");
        }

    })
}
else{
    pacientes.forEach(function(paciente){
        paciente.classList.remove("invisivel");
    })
}
})