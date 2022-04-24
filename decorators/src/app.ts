
function Logger(constructor: Function) {
  console.log('Factory Logger')
  console.log('Logging...')
  console.log('constructr' + constructor)
 //constructor
}



function Logger2(customString: string) {
  console.log('Factory Logger2')
  return function(constructor: Function) {
    console.log('Loogin Logger2')
    console.log(customString + ' Logging...')
    console.log('constructr' + constructor)
  }
 //constructor
}



function WithTemplate(templateString: string, hookId: string) {
  console.log('Factory WithTemplate')
  return function(constructor: any) {
    console.log('Logging WithTemplate')
    const hookElement = document.getElementById(hookId)
    const p = new constructor();
    if (hookElement) {
      hookElement.innerHTML = templateString
      hookElement.querySelector('h1')!.textContent = p.name
    }
  }
}

function WithTemplateV1(templateString: string, hookId: string) {
  console.log('Factory WithTemplate')
  return function<T extends {new(...args: any[]): { name: string}}>(originalConstructor: T) {
    return class extends originalConstructor{
      constructor(..._: any[]) {
        super()
        console.log('Logging WithTemplate')
        const hookElement = document.getElementById(hookId)
        if (hookElement) {
          hookElement.innerHTML = templateString
          hookElement.querySelector('p')!.textContent = this.name
        }
      }
    }
  }
}
// @Logger2('MyCustomString')
// @Logger
//@WithTemplate('<h1>Rohit is awesome</h1>', 'app')
@WithTemplateV1('<h1>Rohit is awesome</h1>', 'app')
class Person {
  name = 'Max'

  constructor() {
    console.log('Creating a person object...');
  }
}

// const pers = new Person()

// console.log(pers)

function LogProp(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!')
  console.log(target, propertyName)
}

function LogSet(target: any, name: string , descriptor: PropertyDescriptor){
  console.log('Accessor decorator')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function LogMethod(target: any, name: string , descriptor: PropertyDescriptor){
  console.log('Method decorator')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}


function LogParameter(target: any, name: string | Symbol , position: number){
  console.log('Parameter decorator')
  console.log(target)
  console.log(name)
  console.log(position)
}
class Product {

  @LogProp
  title: string
  private _price: number

  @LogSet
  set setPrice(val: number) {
    if ( val > 0) {
      this._price = val
    } else {
      throw new Error('Price value should be greater then 0')
    }
  }

  constructor(t: string, p: number) {
    this.title = t
    this._price = p
  }

  @LogMethod
  getMyCalculatedTax(@LogParameter tax: number) {
    return this._price * (1* tax)
  }
}

function AutoBind( _: any, _2: string, description: PropertyDescriptor) {
  const originalMethod = description.value
  const adjDescriptor: PropertyDescriptor = {
    enumerable: false,
    configurable: true,
    get () {
      const org = originalMethod.bind(this)
      return org
    }
  }
  return adjDescriptor
}

class Printer {
  message = "This works Bro!"

  @AutoBind
  showMessage() {
    console.log(this.message)
  }
}


const prt = new Printer()

prt.showMessage()
const button = document.querySelector('.button')! as HTMLButtonElement


button.addEventListener('click', prt.showMessage )

interface ValidatorConfig {
  [property: string]: {
    [propertyName: string]: string[] // ['required', 'positive']
  }
}

const registeredValidators: ValidatorConfig = {}

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName] : [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
  }
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName] : [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
  }
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name]
  if (!objValidatorConfig) {
    return true;
  }
  let isValid  = true
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop]
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0
        break;
      }
    }
  }

  return isValid
}
class Course {
  @Required
  title: string

  @PositiveNumber
  price: number

  constructor (t: string, p: number) {
    this.title = t
    this.price = p
  }

  // saveCourse {

  // }
}

const courseForm = document.querySelector('form')!

courseForm.addEventListener('submit', event => {
  event.preventDefault()
  const titleEl = document.getElementById('title') as HTMLInputElement
  const priceEl = document.getElementById('price') as HTMLInputElement

  const title = titleEl.value
  const price = +priceEl.value

  const course = new Course(title, price)

  if (!validate(course)) {
    alert('Invalid input, please try again!')
    return;
  }

  console.log(course)
})