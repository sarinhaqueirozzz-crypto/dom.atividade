// --- OBJETOS ---

// Questão 1 e 2
const user = {
    nome: "Sara Queiroz",
    email: "saraqueiroz@email.com",
    idade: 25,
    saudar: function() {
        console.log("Olá, meu nome é " + this.nome);
    }
};
console.log(user.nome, user.email, user.idade);
user.saudar();

// Questão 3
user.email = "novo_email@email.com";
console.log("Novo email:", user.email);

// Questão 4
console.log("Acesso com colchetes:", user["nome"]);

// Questão 5
const empresa = {
    nome: "Tech",
    endereco: { cidade: "Amontada" }
};
console.log("Cidade:", empresa.endereco.cidade);

// Questão 6 e 7 (Versão mais compatível)
const tel = empresa.contato ? empresa.contato.telefone : undefined;
console.log("Telefone:", tel);
console.log("Valor padrão:", (tel !== undefined && tel !== null ? tel : "Não possui"));

// --- STRINGS ---

// Questão 8
const texto = "JavaScript";
console.log(texto.toUpperCase(), texto.toLowerCase());

// Questão 9
const senha = "12345";
console.log("Senha válida?", senha.length >= 6);

// Questão 10
let frase = "Eu gosto de css";
console.log(frase.replace("css", "JS"));

// Questão 11 e 12
console.log("Slice:", "Aprendendo".slice(0, 4));
console.log("Trim:", "  espaço  ".trim());

// Questão 13 e 14
let lista = "Maçã Banana Pera";
let arrayLista = lista.split(" ");
console.log("Array:", arrayLista);
console.log("Junto com hífen:", arrayLista.join("-"));

// Questão 15
let busca = "Aprendendo JavaScript";
console.log("Tem 'java'?", busca.toLowerCase().indexOf("java") !== -1);

// --- ARRAYS ---

// Questão 16 e 17
let frutas = ["Maçã", "Uva", "Laranja", "Manga", "Pera"];
console.log("Tamanho:", frutas.length);
console.log("Primeiro:", frutas[0], "Último:", frutas[frutas.length - 1]);

// Questão 18 e 19
frutas.push("Melancia");
frutas.unshift("Morango");
frutas.pop();
frutas.shift();
console.log("Array atual:", frutas);

// Questão 20, 21 e 22
console.log("Posição Laranja:", frutas.indexOf("Laranja"));
frutas.splice(1, 1); // Remove 1 item na posição 1
console.log("Existe Uva?", frutas.indexOf("Uva") !== -1);

// Questão 23
const misto = ["Texto", 10, true];
console.log(misto[1]);

// --- LOOPS ---

// Questão 24 e 25
console.log("Números pares:");
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) console.log(i);
}

// Questão 26 e 27
let c = 1;
while (c <= 5) { console.log("While:", c); c++; }

let x = 0;
do { console.log("Do While executou"); x++; } while (x < 1);

// Questão 28 e 29
for (let i = 1; i <= 5; i++) {
    if (i === 4) break;
    if (i === 2) continue;
    console.log("Loop (break/cont):", i);
}

// Questão 30
const hoje = new Date();
console.log("Data:", hoje.getDate() + "/" + (hoje.getMonth() + 1) + "/" + hoje.getFullYear());
console.log("Formato BR:", hoje.toLocaleDateString('pt-BR'));