// top of global scope
// var difValue;
console.log('top', difValue);

function getValue(condition) {
    // top of functional scope
    // behind the scenes:
    // var value;


    value = 'red';
    // variable is available before it's declared
    // value is accessible throughout function scope

    foo();
    function foo() { console.log('yes') }
    console.log('zero', value);
    //var shape = 'square';
    // ERROR
    //  let shape = 'round';
    //  ERROR, shape is not defined
    //  console.log('if', shape);
    // if block doesn't create local scope in JavaScript
    if (condition) {
      // no error, block-level declaration
      let shape = 'round';
      console.log('one', value);
      // variables are declared at top of functional scope
      // variable hoisting
      var value = "blue";


      console.log('two', value);

      // other code

      return value;
  } else {

    // value exists here with a value of undefined
    return null;
  }
  console.log(value);
  // value exists here with a value of undefined
}
var difValue = 'chair';

console.log(getValue(true));

function testConst() {
  const shape = 'triangle';
  // ERROR:
  //shape = 'rectangle';
  const person = {
    'name': 'David',
    age: 50
  };
  //works
  person.name = 'Mark';
  console.log(person);
  // ERROR
  // person = {
  //   name: 'Fred',
  //   age: 45
  // }
}

testConst();

// summary
// prefer const, only use let when necessary, never var
// ditch loops for reduce(), map(), and filter()

// function declaration hoisting:
bar();
function bar() {console.log('bar')}

// function expression not hoisted:
// boo();
const boo = function() {console.log('boo')}
boo();
