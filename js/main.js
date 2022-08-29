fetch("../json/estados.json")
    .then(response => response.json())
    .then(dados => {
        let listaEstados = []
        dados.map((estado, indice) => {
            listaEstados.push([estado.nome])
            listaEstados[indice].push([estado.uf])
            listaEstados[indice].push([estado.codigo_uf])
            listaEstados[indice].push([estado.latitude])
            listaEstados[indice].push([estado.longitude])
            listaEstados[indice].push([estado.regiao])

        })

        listaEstados.sort()

        let div = document.getElementById("estados");
        let ul = document.createElement("ul");

        listaEstados.forEach(estado => {
            let li = document.createElement("li");
            li.innerText = estado[0] + " - " + estado[1]
            ul.appendChild(li);
        })

        div.appendChild(ul);

    })

