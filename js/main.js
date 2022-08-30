function carregarDados(){
    fetch("../json/estados.json")
    .then(response => response.json())
    .then(dados => {
        dados.sort(function(a,b){
            if(a.uf < b.uf) return -1
            if(a.uf > b.uf) return 1
            return 0
        })

        let div = document.getElementById("estados");
        let ul = document.createElement("ul");

        dados.forEach(estado => {
            let li = document.createElement("li");
            li.innerText = estado.nome + " - " + estado.uf
            li.setAttribute("onclick", "gerarMapa()")
            ul.appendChild(li);
        })

        div.appendChild(ul);

    })
}

document.addEventListener("DOMContentLoaded", carregarDados)