interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

interface IGreetable {
  name: string;
  greet( phrase: string) : void
}

let user: Person;

user = {
  name: "Rohit",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name)
  }
}

user.greet("Hello rohit")


class Person implements IGreetable {

  constructor(name: string) {
  }

  greet ( phrase: string) {
    console.log(phrase + ' ' + this.name)
  }
}


let person: IGreetable =  new Person("rohit")

person.greet("Baby")