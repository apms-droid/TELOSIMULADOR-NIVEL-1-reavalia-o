const fs = require("fs");

const dadosRepasse = JSON.parse(fs.readFileSync("./repasse.json", "utf-8"));

console.log("\n====== PROCESSAMENTO DE REPASSES ======\n");

console.log("HISTÓRIA 1 — TOTAL DE REPASSES");
console.log("Total de repasses:", dadosRepasse.length, "\n");

console.log("HISTÓRIA 2 — ESTATÍSTICAS DE SUCESSO E FALHA\n");

const sucesso = dadosRepasse.filter(r => r.status === "sucesso");
const falha   = dadosRepasse.filter(r => r.status === "falha");

console.log("Total de repasses de sucesso:", sucesso.length);
console.log("Total de repasses de falha:", falha.length);

function agruparPor(lista, campo) {
  return lista.reduce((acc, item) => {
    acc[item[campo]] = (acc[item[campo]] || 0) + 1;
    return acc;
  }, {});
}

console.log("\nSucessos por órgão:", agruparPor(sucesso, "orgao"));
console.log("Falhas por órgão:", agruparPor(falha, "orgao"));

const somaValores = lista => lista.reduce((s, r) => s + r.valor, 0);

console.log("\nValor total de repasses com sucesso:", somaValores(sucesso));
console.log("Valor total de repasses com falha:", somaValores(falha));

function agruparValores(lista, campo) {
  return lista.reduce((acc, item) => {
    acc[item[campo]] = (acc[item[campo]] || 0) + item.valor;
    return acc;
  }, {});
}

console.log("\nValor de repasses por órgão (sucesso):", agruparValores(sucesso, "orgao"));
console.log("Valor de repasses por órgão (falha):", agruparValores(falha, "orgao"));

console.log("\nFalhas por motivo:", agruparPor(falha, "motivo"));
console.log("Valor total de falhas por motivo:", agruparValores(falha, "motivo"), "\n");

console.log("HISTÓRIA 3 — ESTATÍSTICAS AVANÇADAS\n");

const maior = dadosRepasse.reduce((a, b) => (a.valor > b.valor ? a : b));
const menor = dadosRepasse.reduce((a, b) => (a.valor < b.valor ? a : b));

console.log("Maior repasse:", maior);
console.log("Menor repasse:", menor);

const porDia = agruparPor(dadosRepasse, "data");
const diaMaisRepasses = Object.entries(porDia).sort((a, b) => b[1] - a[1])[0];

console.log("\nDia com mais repasses:", diaMaisRepasses[0], "com", diaMaisRepasses[1], "repasses");

const porOrgaoTotal = agruparPor(dadosRepasse, "orgao");
const porOrgaoSucesso = agruparPor(sucesso, "orgao");
const porOrgaoFalha = agruparPor(falha, "orgao");

function maiorItem(obj) {
  return Object.entries(obj).sort((a, b) => b[1] - a[1])[0];
}

console.log("\nÓrgão com mais repasses:", maiorItem(porOrgaoTotal));
console.log("Órgão com mais sucessos:", maiorItem(porOrgaoSucesso));
console.log("Órgão com mais falhas:", maiorItem(porOrgaoFalha));

console.log("Motivo de falha mais comum:", maiorItem(agruparPor(falha, "motivo")), "\n");

console.log("HISTÓRIA 4 — FILTRO AUTOMÁTICO\n");

const orgaosSelecionados = ["Saúde", "Educação"];
const filtrado = dadosRepasse.filter(r => orgaosSelecionados.includes(r.orgao));

console.log("Órgãos filtrados:", orgaosSelecionados);
console.log("Repasses filtrados:");
console.table(filtrado);

console.log("\nHISTÓRIA 5 — TRANSAÇÕES INVÁLIDAS\n");

const invalidas = dadosRepasse.filter(r => r.status === "falha" && !r.motivo);

console.log("Transações inválidas (falha sem motivo):");
console.table(invalidas);

console.log("\nHISTÓRIA 6 — REPROCESSAMENTO APENAS COM TRANSAÇÕES VÁLIDAS\n");

const validas = dadosRepasse.filter(r => !(r.status === "falha" && !r.motivo));

console.log("Total de válidas:", validas.length);

const valS = validas.filter(r => r.status === "sucesso");
const valF = validas.filter(r => r.status === "falha");

console.log("\nTotais (válidas):");
console.log("Sucesso:", valS.length);
console.log("Falha:", valF.length);

console.log("\nValores (válidas):");
console.log("Total sucesso:", somaValores(valS));
console.log("Total falha:", somaValores(valF));

console.log("\nReprocessamento concluído.\n");