// ----------
// BANCO DE CIDADES
// Adicione ou remova cidades aqui 
// A busca ignora maiúsculas e acentos
// ----------

const CIDADES = [
    "Aruja",
    "Barueri",
    "Biritiba-Mirim",
    "Caieiras",
    "Cajamar",
    "Carapicuiba",
    "Cotia",
    "Diadema",
    "Embu",
    "Embu-Gauçu",
    "Ferraz de Vasconcelos",
    "Francisco Morato",
    "Franco da Rocha",
    "Guararema",
    "Guarulhos",
    "Itapeceria da Serra",
    "Itaquaquecetuba",
    "Jandira",
    "Juquitiba",
    "Mariporã",
    "Mauá",
    "Mogi das Cruzes",
    "Osasco",
    "Pirapora do Bom Jesus",
    "Poá",
    "Ribeirão Pires",
    "Rio Grande da Serra",
    "Salesópolis",
    "Santa Isabel",
    "Santana de Parnaíba",
    "Santo André",
    "São Bernardo do Campo",
    "São Caetano do Sul",
    "São Lourenço da Serra",
    "São Paulo",
    "Suzano",
    "Taboão da Serra",
    "Vargem Grande Paulista",
]

// ---------------
// NORMALIZAÇÃO
// Transforma qualquer string em minúsculo, sem acento para comparação justa
// Ex: "São Paulo" -> "sao paulo"

function normalizar(texto){
    return String(texto) // Garante que é string antes de tudo
    .normalize("NFD") // Separa letra do acento
    .replace(/[\u0300-\u036f]/g, "") // remove os acentos
    .toLowerCase() // Tudo minúsculo
    .trim() // Remove espaços extras
}

// ---------------
// VERIFICAR CIDADE
// Lê o que o usuário digitou, normaliza, compara com cada cidade do array e exibe o resultado no HTML
// ----------------

function verificarCidade() {
    
    // Pega o valor digitado no input
    const digitado = document.getElementById("input-cidade").value 

    // Se o ccampo estiver vazio, não faz nada
    if (digitado.trim() == "") {
        return
    }

    // Normaliza o que foi digitado
    const digitadoNorm = normalizar(digitado)

    // Procura no array uma cidade qu, normalizada, seja igual ao digitado 
    const encontrada = CIDADES.find(function(cidade) {
        return normalizar(cidade) == digitadoNorm
    })

    // Pega o elemento HTML onde o resultado vai aparecer
    const divResultado = document.getElementById("resultado-cidade")

    // Exibe o resultado conforme encontrado ou não
    if (encontrada) {
        divResultado.textContent = "Está dentro da limítrofe"
    } else {
        divResultado.textContent = "Não está dentro da limítrofe"
    }
}

// -------------
// EVENTOS
// Liga o botão e o Enter à função
// -------------

// Quando clicar no botão "Verificar"
document.getElementById("btn-verificar").addEventListener("click", verificarCidade)

// Quando pressionar o Enter no campo de texto
document.getElementeById("input-cidade").addEventListener("keydown", function(evento) {
    if (evento.key === "Enter") {
        verificarCidade()
    }
})