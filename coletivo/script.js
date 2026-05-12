let perguntas = [
    {
        pergunta: "Qual o nome da escola?",
        respostas: [
            "Luis Eulalio de Bueno Vidigal Filho",
            "Nami Jafet",
            "Senai Osasco",
            "Senai São Paulo"
        ],
        correta: 0
    },

    {
        pergunta: "Que ano começou a primeira turma do técnico em desenvolvimento de sistemas?",
        respostas: ["2022", "2023", "2020", "2021"],
        correta: 1
    },

    {
        pergunta: "Qual o nome do diretor da escola?",
        respostas: ["Santos", "Moraes", "Cotrim", "William"],
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
            <button onclick="verificarResposta(${index})">
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