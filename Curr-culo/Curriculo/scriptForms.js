var form = document.getElementById("formulario");

form.addEventListener("submit", function(event){
    event.preventDefault();

    
    var sobre = document.getElementById("sobre").value;
    var habilidade = document.getElementById("habilidade").value;
    var informacoes = document.getElementById("Informaçoes").value;
    var site = document.getElementById("site").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var empresa = document.getElementById("empresa").value;
    var cargo = document.getElementById("cargo").value;
    var inicio = document.getElementById("inicio").value;
    var fim = document.getElementById("fim").value;
    var descricao = document.getElementById("descricao").value;

    var url = "index.html?";
    url += "nome=" + nome + "&";
    url += "sobre=" + sobre + "&";
    url += "habilidade=" + habilidade + "&";
    url += "informacoes=" + informacoes + "&";
    url += "site=" + site + "&";
    url += "telefone=" + telefone + "&";
    url += "email=" + email + "&";
    url += "empresa=" + empresa + "&";
    url += "cargo=" + cargo + "&";
    url += "inicio=" + inicio + "&";
    url += "fim=" + fim + "&";
    url += "descricao=" + descricao;

    window.location.href = url;
});