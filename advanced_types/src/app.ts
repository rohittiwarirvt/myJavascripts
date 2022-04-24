type Admin = {
  name: string,
  privileges: string[]
}

type Employee = {
  name: string,
  startDate: Date
}


type PrivilegedEmployee = Admin & Employee

const e1: PrivilegedEmployee = {
  name: "Rohit",
  privileges: ['admin'],
  startDate: new Date('2021-09-23Z')
}

console.log(e1);

type Combinable = number | string;
type Numeric = number | boolean;


type Universal = Combinable & Numeric


function add(a: Combinable, b: Combinable ) {

  if (typeof a === 'string' || typeof b === 'string'){
    return a.toString() + b.toString()
  }

  return a + b
}

type UnknownEmployee = Admin | Employee;

function printEmployee(emp: UnknownEmployee) {
  console.log(emp.name)
  if ( 'privileges' in emp)
    console.log(emp.privileges)
  if ( 'startDate' in emp)
    console.log(emp.startDate)
}

interface Bird {
  type: 'bird',
  flySpeed: string
}

interface Horse {
  type: 'horse'
  runningSpeed: string
}

type Animal = Bird | Horse;

function moveAnimal( animal: Animal) {
  let speed
  switch (animal.type) {
     case 'bird':
      speed = animal.flySpeed
     break;
     case 'horse':
      speed = animal.runningSpeed
     break;

  }
  console.log('Animal sped is:'  + speed)
}



const inputElement = document.getElementById('input-button')! as HTMLInputElement


inputElement.value = "Rohit is honesh!"


interface ErrorContainer {
  [prop: string]: string
}

const errorBag: ErrorContainer = {
  email: "Eneterd Email is invalid",
  username: "Must start with a capital Letter"
}



