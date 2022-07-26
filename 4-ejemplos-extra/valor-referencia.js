// VARIABLES PRIMITIVAS => Funcionan con paso por valor.
let numero = 10;
let numero2 = numero;
numero = 20;
console.log('numero: ', numero); // 20
console.log('numero2: ', numero2); // 10

// VARIABLES COMMPLEJOS => Funcionan con paso por referencia.
let shoes = [
    { id: 1, brand: 'noke', price: 200, size: 29 },
    { id: 2, brand: 'edidas', price: 500, size: 22 },
    { id: 3, brand: 'floxi', price: 900, size: 25 },
];
// const shoesCopy = shoes;
const shoesCopy = [ ...shoes ];
shoesCopy.splice(2, 1);

console.log('shoes: ', shoes); // no. elementos: 3
console.log('shoesCopy: ', shoesCopy);  // no. elementos: 2

let student = { id: 1, name: 'jose montoya' };
// let student2 = student;
let student2 = { ...student };
student.name = "oliver lopez";
console.log('student: ', student); // student.name = oliver lopez
console.log('student2: ', student2); // student.name = jose montoya