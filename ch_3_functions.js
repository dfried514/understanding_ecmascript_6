function sum(a = 3, ...more) {
  var args = Array.from(arguments);
  console.log('args', args);
  return a + more[0] + more[1];
}

console.log(sum(5, 6, 7));

let arr = [1, 2, 3];
let a2 = [5, 6, 7];
let ar3 = [...arr];

console.log(ar3);
console.log(arr);

console.log([...arr, ...a2]);

console.log(sum(...arr));

function Employee(name, role) {
  if (new.target === Employee) {
    this.name = name;
    this.role = role;
  } else {
    throw new Error('You must use new with Employee');
  }
}

function AnotherEmployee(name, role) {
  Employee.call(this, name, role);
}

let employee = new Employee('David', 'cook');
let anotherEmployee = new AnotherEmployee('Neha', 'engineer');

