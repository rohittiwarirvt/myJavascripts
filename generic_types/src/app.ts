const names: Array<string> = ['rohit']

names[0].split(' ')

const promise: Promise<string> = new Promise( (resolve) => {
  setTimeout(() =>{
    return resolve('This is reponse')
  }, 1000)
})

promise.then( (data) =>{
  data.split(" ")
})


function mergeObj<T extends object, U extends object >(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2)
}

const mergedObj = mergeObj({name: 'Rohit', hobbies:['dancing', 'hokey']}, {age: 30})
const mergedObj2 = mergeObj({name: 'Rohit', hobbies:['dancing', 'hokey']}, {hairColor: 'blue'})
console.log(mergedObj)
console.log(mergedObj2)

interface Lengthy {
  length: number
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value"
  if (element.length == 1) {
    descriptionText = 'Got 1 element'
  } else if (element.length > 0) {
    descriptionText = "Got " + element.length + " elements";
  }

  return [element, descriptionText]
}

console.log(countAndDescribe(["rohit", "rahul"]))

console.log(countAndDescribe([2, 3]))

console.log(countAndDescribe("Give us some hope"))

console.log(countAndDescribe([]))

function getAndExtract<T extends object, U extends keyof T>(obj: T, key: U ) {
  return "Value is :" + obj[key]
}

console.log(getAndExtract({ age: 30}, 'age'))
// console.log(getAndExtract({ age: 30}, 'name'))
// console.log(getAndExtract({}, 'name'))



class DataStorage<T extends string| number| boolean> {

  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return
    }
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems(): T[] {
    return [...this.data]
  }

}

const textStorage = new DataStorage<string>()
textStorage.addItem('Rohit')
textStorage.addItem('Rahul')
textStorage.removeItem('Rohit')
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>()
const objectStorage = new DataStorage<object>()
const obj = {name: "Max"};
objectStorage.addItem(obj)
objectStorage.addItem({name: "Curtis"})
objectStorage.removeItem(obj)
console.log("test")

console.log(objectStorage.getItems())


interface CourseGoal {
  name: string,
  description: string,
  completeDate: Date
}

function createCourse(name: string, description: string, completeDate: Date): CourseGoal {

  let courseGoal: Partial<CourseGoal> = {}

    courseGoal.name = name;
    courseGoal.description = description;
    courseGoal.completeDate = completeDate

    return courseGoal as CourseGoal
}

const employeeNames: Readonly<string[]> = ['Rohit', 'Rahul']
//employeeNames.push('Rushabh')






