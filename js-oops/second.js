  var input = document.querySelector('input');
  var btn   = document.querySelector('button');
  var para = document.querySelector('p');

  btn.onclick = function() {
    var code = input.value;
    para.textContent = eval(code);
  }

 function createNewPerson(name) {
  var object = {};
  object.name = name;
  object.greeting = function() {
    console.log("Hi" + object.name + ". Welcome");
  }
  return object;
 }

 var person1 = createNewPerson("rohit");
 person1.greeting();


function Person(first, last, age, gender, interests) {
  this.name = {
    first, last
  }
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes' + this.interests[0] + ' and ' + this.interests[1] + '.');
  };
  this.greeting = function() {
    console.log("Hi I am " + this.name.first);
  };

}

var person2 = new Person('rahul','tiwari', 23, 'male', ['music','dancing']);
var person3 = new Person('rushabh','tiwari',20, 'male',['rapping','imaging']);


var person4 = new Object({
  name: 'Chris',
  age: 18,
  greeting: function() {
    console.log("Hi! I \'m " + this.name + '.')
  }
});

var person5 = Object.create(person3);
