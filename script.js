/* =========================================================
   🏛️ MUSEU DOS OBJETOS INÚTEIS

   SISTEMA DE EXPOSIÇÕES

   Agora temos um acervo.

   A humanidade não pediu.
   O museu também não perguntou.

   Mas eles estão aqui.
   ========================================================= */


/* =========================================================
   ELEMENTOS DO HTML
   ========================================================= */

const botaoVoltar = document.getElementById("btn-voltar");

const botaoAvancar = document.getElementById("btn-avancar");

const contadorSala = document.getElementById("contador-sala");

const objetoEmoji = document.getElementById("objeto-emoji");

const tituloObjeto = document.querySelector(".informacoes-objeto h3");

const descricaoObjeto =
    document.querySelectorAll(".descricao-objeto");

const tituloSala =
    document.querySelector(".titulo-sala");

const numeroCatalogo =
    document.querySelector(".numero-catalogo");

const placaObra =
    document.querySelector(".placa-obra");

const mensagemObjeto =
    document.getElementById("mensagem-objeto");


/* =========================================================
   ACERVO DO MUSEU
   ========================================================= */

/*
   Cada objeto possui:

   - emoji
   - nome
   - descrição
   - material
   - período
   - valor
   - importância

   Tudo extremamente importante.

   Principalmente a importância.
*/

const exposicoes = [

    {
        emoji: "🥄",

        nome: "A Colher",

        descricao1:
            "Uma colher absolutamente normal. Ela não faz nada especial. Ela não possui poderes. Ela não muda sua vida.",

        descricao2:
            "E mesmo assim alguém decidiu colocá-la dentro de uma vitrine.",

        material:
            "Metal misterioso",

        periodo:
            "Provavelmente ontem",

        valor:
            "R$ 0,37",

        importancia:
            "Questionável",

        mensagens: [
            "🥄 Você encontrou a colher. Ela decidiu que hoje é dia de tirar uma selfie invisível.",
            "🥄 Não subestime o poder da colher: ela julga silenciosamente sua última refeição.",
            "🥄 Alerta: esta colher só fala com quem reconhece sua grandiosidade.",
            "🥄 Sim, ela é inútil. Ainda assim, ela aguarda sua reverência."
        ]

    },


    {
        emoji: "🧦",

        nome: "A Meia Solitária",

        descricao1:
            "Uma meia que perdeu sua companheira em circunstâncias jamais esclarecidas.",

        descricao2:
            "Ela permanece no museu aguardando alguém dizer: 'eu tenho a outra'.",

        material:
            "Algodão e sofrimento",

        periodo:
            "Após a última lavagem",

        valor:
            "R$ 2,14",

        importancia:
            "Emocionalmente relevante",

        mensagens: [
            "🧦 A meia solitária está treinando para um encontro às escuras com outra meia perdida.",
            "🧦 Ela guardou segredos de todas as lavagens. Pergunte com respeito.",
            "🧦 Cuidado: essa meia pode ter um humor tecido em nó.",
            "🧦 A meia insiste que ainda pensa na outra. E você achou que era só roupa."
        ]

    },


    {
        emoji: "🪨",

        nome: "A Pedra",

        descricao1:
            "Uma pedra. Ela estava no chão. Agora está aqui.",

        descricao2:
            "Especialistas afirmam que ela é indistinguível de outras pedras. Especialistas foram demitidos.",

        material:
            "Pedra",

        periodo:
            "Muito tempo atrás",

        valor:
            "R$ 0,00",

        importancia:
            "Geologicamente aceitável",

        mensagens: [
            "🪨 Pedra fala pouco, mas quando fala, é só para lembrar que ela estava aqui antes de você.",
            "🪨 A pedra está se perguntando se este é o seu melhor ângulo.",
            "🪨 Especialistas demitidos. A pedra aplaude a decisão.",
            "🪨 Olá, humano. Você ainda acredita que eu sou só uma pedra?"
        ]

    },


    {
        emoji: "📎",

        nome: "O Clipe Administrativo",

        descricao1:
            "Um clipe de papel que passou anos prendendo documentos que ninguém queria ler.",

        descricao2:
            "Hoje ele está aposentado. Finalmente livre da burocracia.",

        material:
            "Metal",

        periodo:
            "Era administrativa",

        valor:
            "R$ 0,12",

        importancia:
            "Burocraticamente elevada",

        mensagens: [
            "📎 O clipe ficou famoso por prender mais segredos do que papéis.",
            "📎 Ele sonha em ser usado para algo mais importante, como um broche de moda.",
            "📎 Não tente arrancá-lo da sua nostalgia administrativa.",
            "📎 Cuidado: um pequeno estalo pode libertar uma avalanche de documentos."
        ]

    },


    {
        emoji: "📦",

        nome: "A Caixa Vazia",

        descricao1:
            "Uma caixa completamente vazia. Não há absolutamente nada dentro dela.",

        descricao2:
            "Por favor, não abra a caixa. Você já sabe o que tem dentro.",

        material:
            "Papelão",

        periodo:
            "Depois de ser esvaziada",

        valor:
            "R$ 1,50",

        importancia:
            "Existencialmente profunda",

        mensagens: [
            "📦 A caixa vazia não tem nada a dizer. Ela só quer que você pare de olhar para ela.",
            "📦 Ela está cheia de possibilidades. Ou de ar. Talvez de ar.",
            "📦 Não abra. Este é o mistério mais convincente que você verá hoje.",
            "📦 A caixa vazia se considera uma obra-prima da pressa humana."
        ]

    }

];


/* =========================================================
   ESTADO DO MUSEU
   ========================================================= */

let salaAtual = 0;


/* =========================================================
   TOTAL DE SALAS
   ========================================================= */

const totalSalas = exposicoes.length;


/* =========================================================
   MOSTRAR EXPOSIÇÃO
   ========================================================= */

/* =========================================================
   INTERAÇÃO COM O OBJETO
   ========================================================= */

/*
   Quando o visitante clicar na obra,
   o museu finalmente terá alguma reação.

   A reação da colher será:

   "Você clicou em uma colher."

   Revolucionário.
*/

objetoEmoji.addEventListener("click", function () {

    const exposicao = exposicoes[salaAtual];
    const mensagens = exposicao.mensagens || [
        "Esse objeto não tem muito a dizer, mas pelo menos ele ainda está aqui.",
        "Clique em outro objeto. Quem sabe ele responda com algo mais profundo."
    ];
    const mensagemAleatoria = mensagens[
        Math.floor(Math.random() * mensagens.length)
    ];

    mensagemObjeto.textContent = mensagemAleatoria;
    mensagemObjeto.classList.add("mostrar");

});

function mostrarExposicao() {

    /*
       Pegamos a exposição correspondente
       à sala atual.

       O computador chama isso de índice.

       Nós chamamos de:
       "onde diabos está a colher?"
    */

    const exposicao = exposicoes[salaAtual];


    /* -----------------------------------------
       Atualizar emoji
       ----------------------------------------- */

    objetoEmoji.textContent =
        exposicao.emoji;


    /* -----------------------------------------
       Atualizar nome
       ----------------------------------------- */

    tituloObjeto.textContent =
        exposicao.nome;


    /* -----------------------------------------
       Atualizar descrições
       ----------------------------------------- */

    descricaoObjeto[0].textContent =
        exposicao.descricao1;

    descricaoObjeto[1].textContent =
        exposicao.descricao2;


    /* -----------------------------------------
       Atualizar catálogo
       ----------------------------------------- */

    numeroCatalogo.textContent =
        `CAT. Nº ${String(salaAtual + 1).padStart(4, "0")}`;


    /* -----------------------------------------
       Atualizar título da sala
       ----------------------------------------- */

    tituloSala.textContent =
        "Objetos que simplesmente existem";


    /* -----------------------------------------
       Atualizar contador
       ----------------------------------------- */

    contadorSala.textContent =
        `Sala ${String(salaAtual + 1).padStart(2, "0")} / ${String(totalSalas).padStart(2, "0")}`;


    /* -----------------------------------------
       Atualizar placa da obra
       ----------------------------------------- */

    placaObra.innerHTML = `

        <p>
            <strong>Material:</strong>
            ${exposicao.material}
        </p>

        <p>
            <strong>Período:</strong>
            ${exposicao.periodo}
        </p>

        <p>
            <strong>Valor estimado:</strong>
            ${exposicao.valor}
        </p>

        <p>
            <strong>Importância histórica:</strong>
            ${exposicao.importancia}
        </p>

    `;


    /* -----------------------------------------
       Atualizar estado dos botões
       ----------------------------------------- */

    botaoVoltar.disabled =
        salaAtual === 0;

    botaoAvancar.disabled =
        salaAtual === totalSalas - 1;


    /* -----------------------------------------
       Mensagem no console
       ----------------------------------------- */

    console.log(
        `🏛️ Visitando: ${exposicao.nome}`
    );

}


/* =========================================================
   BOTÃO VOLTAR
   ========================================================= */

botaoVoltar.addEventListener("click", function () {

    if (salaAtual > 0) {

        salaAtual--;

        mostrarExposicao();

    }

});


/* =========================================================
   BOTÃO AVANÇAR
   ========================================================= */

botaoAvancar.addEventListener("click", function () {

    if (salaAtual < totalSalas - 1) {

        salaAtual++;

        mostrarExposicao();

    }

});


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

mostrarExposicao();


/* =========================================================
   MENSAGEM INSTITUCIONAL
   ========================================================= */

console.log(
    "🏛️ Museu dos Objetos Inúteis iniciado."
);

console.log(
    `🗿 ${totalSalas} objetos atualmente catalogados.`
);

console.log(
    "⚠️ Utilidade encontrada: 0%"
);

