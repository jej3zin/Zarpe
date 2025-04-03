/* GUIA */
/* let a = parseInt(prompt('Digite um número entre 0 a 10.'));
let b = parseInt(prompt('Digite um outro número entre 0 a 10.'));
let c = parseInt(prompt('Digite mais um número entre 0 a 10.'));

if (a <= 10 && b <= 10 && c <= 10 && a >= 0 && b >= 0 && c >= 0 && isNaN) {
}
if (result <= c && isNaN) {
  let result = a + b;
  alert('A soma de A + B é maior que C.');
} else {
  alert('A soma de A + B é menor que C.');
} */

/* Tábuada */
/* for (let i = 1; i <= 6; i++) {
  console.log('Repetição númerica: ' + i);
} */

/* let dado1 = parseInt(prompt('Escreva um número'));
let dado2 = parseInt(prompt('Escreva outro número'));
dado1 + Math.random() * 6 + 1;
dado2 + Math.random() * 6 + 1;
let accountant = 1;

while (dado1 !== dado2) {
  accountant++;
  dado1 = parseInt(Math.random() * 6 + 1);
  dado2 = parseInt(Math.random() * 6 + 1);
}

alert('O resultado foi: ' + dado1 + ' Foram jogados ' + accountant + ' vezes.');
 */
/* object */
/* const list = { name: 'caneta', price: 1, amount: 100 };
document.write(
  `${list.name} custa R$${list.price} e há ${list.amount} unidades em estoque`
); */
/* const people = { name: 'Jean', age: 24, email: 'jej3zin@gmail.com' }; */
/* const carro = {
  marca: 'Fiat',
  modelo: 'Uno',
  ano: 2023,
  km: 10000,
  combustivel: 'gasolina',
  litrosConsumidos: 625,
};
document.write(
  `O carro ${carro.marca} ${carro.modelo} do ano ${carro.ano} fez em média ${
    carro.km / carro.litrosConsumidos
  } Km/L de ${carro.combustivel}`
); */

/* const endereco = { lagradouro: 'Rua das Tulias', numero: 302 };
const people = { nome: 'João', sobrenome: 'Fagundes', endereco };

alert(
  `${people.nome} ${people.sobrenome}, mora atualmente em ${people.endereco.lagradouro}, número ${people.endereco.numero}.`
);

for (let prop in people) {
  console.log(prop); // Ver o que tem no objeto
  console.log(people[prop]); // Ver o que tem na propriedade
} */
/* let name = prompt('Digite seu nome');
let email = prompt('Digite seu email');

const names = { name: exemple };
const emails = { email: exemplegmail.com };
 */
/* 
let user = document.getElementById('user');
user.value = 'Username';

let pass = document.getElementById('password');
password.value = 'Password';

const list = document.getElementById('listItems');
let newItem = 'Join';

list.innerHTML += '<li>Item</li>';
 */
/*  */
/* 
const database = [
  { name: 'João', age: 21, email: 'joao@gmail.com' },
  { name: 'Rafa', age: 24, email: 'rafa22@gmail.com' },
  { name: 'Touma', age: 30, email: 'touma@gmail.com' },
  { name: 'Paulo', age: 35, email: 'paulo@gmail.com' },
  { name: 'Sung', age: 21, email: 'sung@gmail.com' },
];

const list = document.getElementById('list');

for (let i = 0; i < database.length; i++) {
  list.innerHTML +=
    '<li> ' + database[i].name + ': ' + database[i].email + '</li>';
} */
/* const product = [
  { name: 'Pen', price: 2, Amount: 3 },
  { name: 'Lapis', price: 1.5, Amount: 8 },
  { name: 'Borracha', price: 0.5, Amount: 99 },
  { name: 'Caderno', price: 3, Amount: 10 },
  { name: 'Regua', price: 3.5, Amount: 5 },
];

const tableProduct = document.getElementById('tableProduct');

for (let i = 0; i < product.length; i++) {
  tableProduct.innerHTML += `
  <tr>
    <td>${product[i].name}</td>
    <td>$${product[i].price.toFixed(2)}</td>
    <td>${product[i].Amount}</td>
  </tr>`;
} */

const aluno = {
  nome: 'Jean',
  notas: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

const output = document.getElementById('output');

output.innerHTML = '<h2>Aluno: ' + aluno.nome + '</h2>';
output.innerHTML += '<p>Notas: ' + aluno.notas + '</p>';

output.innerHTML += '<ul> ';
let soma = 0;
for (i = 0; i < aluno.notas.length; i++) {
  soma += aluno.notas[i];
  output.innerHTML += '<li>' + aluno.notas[i] + '</li>';
}
let media = soma / aluno.notas.length;
output.innerHTML += '</ul> ';
output.innerHTML += '<p>Média: ' + media + ' </p>';

let aprovado = media >= 7 ? '<b>Aprovado</b>' : '<b>Reprovado</b>';
/* let aprovado = null;
if (media >= 7) {
  aprovado = 'Aprovado';
} else {
  aprovado = 'Reprovado';
} */
output.innerHTML += 'Aprovação: ' + aprovado;
