function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

Person.prototype.greeting = function() {
  console.log('Hi! I\'m ' + this.name.first + '.');
};

Person.prototype.bio = function() {
  console.log(this.name.first +" is " + this.age + "years old. They like" + this.interests[0] + " and " + this.interests[1]);
}

function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests)
  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.greeting = function() {
  var prefix;
  if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    prefix = "Mr.";
  } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    prefix = "Ms.";
  } else {
    prefix = "Mx.";
  }

  console.log('Hello. My name is ' + prefix + " " + this.name.last + ', and I teach ' + this.subject);
}

var person1 = new Person("rohit", "tiwari", 19, 'male', ['violine','guitar']);


var teacher1 = new Teacher("Rahul", "tiwari", 83,'female',['chit-chat','violin'],"Chemistry");


function Brick() {
  this.height = 100;
  this.wigdth= 200;
}


function BrickWithShape(shape) {
  Brick.call(this);
  this.shape = shape;
}


var brick_with_shape = new BrickWithShape("circle");



function Student(first, last, age, gender, interests, standard) {
  Person.call(this, first, last, age ,gender, interests);
  this.standard = standard;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.greeting = function() {
  console.log("Hi People. This is" + this.name.first + "I am in " + this.standard);
};

var student1 = new Student('rushabh',"tiwari", 20, "male", ['violin','guitar'], 12);
