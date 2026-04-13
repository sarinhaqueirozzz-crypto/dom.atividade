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

// Questão 6 e 7 
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

// --- QUESTÃO 31  ---
const users31 = [
  { name: "Iris", email: "iris@gmail.com" },
  { name: "Dandan", email: "dandan@outlook.com" },
  { name: "davi", email: "davi@gmail.com" }
];
console.log("Q31 - Usuários Gmail:");
users31.forEach(user => {
  if (user.email.includes("gmail")) console.log(user.name);
});

// --- QUESTÃO 32 ---
const product32 = { name: "Teclado", price: 150.50 };
const priceFormatted = product32.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
console.log(`Q32 - Produto: ${product32.name} - ${priceFormatted}`);

// --- QUESTÃO 33 ---
let text33 = " LISTA DE ALUNOS ";
let cleanText = text33.trim().toLowerCase();
console.log(`Q33 - Texto: "${cleanText}" | Contém alunos? ${cleanText.includes("alunos")}`);

// --- QUESTÃO 34 ---
const numbers34 = [10, 20, 30, 40];
let sum34 = 0;
for (let i = 0; i < numbers34.length; i++) {
  sum34 += numbers34[i];
}
console.log("Q34 - Soma total:", sum34);

// --- QUESTÃO 35 ---
const products35 = [
  { name: "Mouse", price: 80 },
  { name: "Monitor", price: 1200 },
  { name: "Cabo HDMI", price: 45 }
];
console.log("Q35 - Produtos > 100:");
products35.forEach(p => { if (p.price > 100) console.log(p.name); });

// --- QUESTÃO 36 ---
const names36 = ["Lavinia", "Ycaro", "Isabelly"];
console.log("Q36 - Nomes em maiúsculo:");
for (let name of names36) {
  console.log(name.toUpperCase());
}

// --- QUESTÃO 37 ---
const user37 = { name: "Thiago", lastLogin: new Date("2026-04-10") };
const today = new Date();
const diffDays = Math.ceil(Math.abs(today - user37.lastLogin) / (1000 * 60 * 60 * 24));
console.log(`Q37 - Login em: ${user37.lastLogin.toLocaleDateString('pt-BR')} (Há ${diffDays} dias)`);

// --- QUESTÃO 38 ---
const words38 = ["JavaScript", "HTML", "CSS"];
console.log("Q38 - Palavras com mais de 4 letras:");
words38.forEach(w => { if (w.length > 4) console.log(w); });

// --- QUESTÃO 39 ---
const orders39 = [{ product: "Teclado", price: 100 }, { product: "Mouse", price: 50 }];
const hasMouse = orders39.some(o => o.product === "Mouse");
console.log("Q39 - Existe Mouse no pedido?", hasMouse);

// --- QUESTÃO 40 ---
console.log("Q40 - Contagem (pula 5, para no 8):");
let i40 = 1;
while (i40 <= 10) {
  if (i40 === 5) { i40++; continue; }
  if (i40 === 8) break;
  console.log(i40);
  i40++;
}

// --- QUESTÃO 41 ---
const users41 = [
  { name: "Lavinia", email: "lavinia@test.com", active: true },
  { name: "Ycaro", email: "ycaro@test.com", active: false },
  { name: "Thiago", email: "thiago@test.com", active: true }
];
let activeCount = 0;
users41.forEach(u => {
  if (u.active) {
    console.log(`Q41 - Nome: ${u.name} - Email: ${u.email}`);
    activeCount++;
  }
});
console.log("Total ativos:", activeCount);

// --- QUESTÃO 42 ---
const products42 = [{ name: "PC", price: 3000 }, { name: "Mouse", price: 100 }, { name: "Fone", price: 500 }];
let total42 = 0;
let expensive = products42[0];
products42.forEach(p => {
  total42 += p.price;
  if (p.price > expensive.price) expensive = p;
});
console.log(`Q42 - Total: ${total42.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} | Mais caro: ${expensive.name}`);

// --- QUESTÃO 43 ---
let text43 = "Lavínia, João, Isabelly, Ycaro, Rafael";
let result43 = text43.split(", ")
  .filter(n => n.startsWith("A"))
  .map(n => n.toUpperCase())
  .join(", ");
console.log("Q43 - Nomes com A:", result43);

// --- QUESTÃO 44 ---
const orders44 = [
  { id: 1, product: "Livro", price: 50, date: new Date() },
  { id: 2, product: "Cadeira", price: 150, date: new Date("2026-01-01") }
];
console.log("Q44 - Pedidos formatados:");
orders44.forEach(o => {
  console.log(`${o.product} - ${o.date.toLocaleDateString('pt-BR')} ${o.price > 100 ? "(Vip)" : ""}`);
});