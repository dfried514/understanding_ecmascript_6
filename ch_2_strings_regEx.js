function stringFun() {
  var text = 'abcdef';

  console.log(text.length);
  console.log(text.indexOf('bc', 2));
  console.log(text.search('bc', 2));

  var sub = text.slice(-3);
  var subStr = text.replace(/../, 'aa');
  console.log(text);
  console.log(sub);
  console.log('subStr', subStr);
}

// stringFun();

// summary:
// all string methods do not modify the original string
// they all return a new string
// all strings are immutable
// strings cannot be changed, just replaced

function regExFun() {
  let re1 = /[a-d]+/g;
  let re2 = RegExp('\w');

  // use parenthesis to get the parts you want
  let [_, v1, v2, v3] = /(\w)(\w)(\w)/.exec('abc');
  console.log(v1, v2, v3);
  console.log(re2.test('Aba'));

  let global = /abc/g;
  console.log(global.exec('xyz abc'));
  let sticky = /abc/y;
  sticky.lastIndex = 4;
  console.log(sticky.exec('xyz abc'));
}

//regExFun();

function templateLiteralFun() {

  let a = 5;
  let b = 10;
  let name = 'David';

  let text = `Hi, my name is ${name}, and 5 + 10 = ${a + b}`;
  console.log(text);
}

templateLiteralFun();
