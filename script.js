let perguntas = [
    {
        pergunta: "?",
        respostas: [
            "aaaaa",
            "bbbbb",
            "ccccc",
            "ddddd"
        ],
        correta: 0
    },

    {
        pergunta: "?",
        respostas: ["", "", "", ""],
        correta: 1
    },

    {
        pergunta: "?",
        respostas: ["", "", "", ""],
        correta: 3
    }
]

// variáveis de controle
let perguntaAtual = 0
let pontuacao = 0

function mostrarPergunta() {

    let pergunta = perguntas[perguntaAtual]

    document.getElementById("pergunta").innerText = pergunta.pergunta

    let respostasDiv = document.getElementById("respostas")

    respostasDiv.innerHTML = ""

    // mostrar respostas
    pergunta.respostas.forEach(function(resposta, index) {

        respostasDiv.innerHTML += `
            <button onclick="verificarResposta(${index})" style="background-color: #4992ac; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
                ${resposta}
            </button>
        `
    })
}

function verificarResposta(index) {

    let pergunta = perguntas[perguntaAtual]

    if (index == pergunta.correta) {

        document.getElementById("resultado").innerText = "Resposta certa!"
        pontuacao++

    } else {

        document.getElementById("resultado").innerText = "Resposta errada!"
    }
}

function proximaPergunta() {

    perguntaAtual++

    if (perguntaAtual < perguntas.length) {

        mostrarPergunta()
        document.getElementById("resultado").innerText = ""

    } else {

        mostrarResultadoFinal()
    }
}

function mostrarResultadoFinal() {

    document.getElementById("quiz-container").innerHTML = `
        <h2>Quiz finalizado!</h2>
        <p>Sua pontuação foi: ${pontuacao}</p>

        <button onclick="location.reload()">
            Jogar novamente
        </button>
    `
}

mostrarPergunta()