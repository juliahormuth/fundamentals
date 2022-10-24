const pessoas = [
  { id: 3, nome: "Julia" },
  { id: 2, nome: "Daniel" },
  { id: 1, nome: "Felipe" },
];

const novasPessoas = {};

for (const pessoa of pessoas) {
  const { id } = pessoas;
  novasPessoas[id] = { ...pessoa };
}

const products = new Map();

products.set("teste", "Mouse");
products.set("2", "Monitor");
products.set("3", "Teclado");

console.log(products);
console.log(products.size);

console.log(products.get("teste")); //Mouse

for (p of products) {
  console.log(p[1]); // The products without keys
  // p[0] come the keys
}

function info(key, value) {
  console.log("Chave: " + key + "- Valor: " + value);
}

products.forEach(info);
