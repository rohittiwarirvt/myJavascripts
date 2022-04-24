// Code goes here!
class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // short
    // this.name = name;
    // this.id = id;
  }

  describe(this: Department) {
    console.log(`Department id is ${this.id} and name is ${this.name}`)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}


class AccountingDepartment extends Department {

  private lastReport: string;

  constructor(id: string, private reports: string[]) {
    super(id, 'Accouting')
    this.lastReport = reports[0]
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error('No Reports Found!')
  }

  set mostRecentReport(value:string) {
    if (!value) {
      throw new Error('Please pass a valid value!')
    }
    this.addReport(value)
  }

  addEmployee(employee: string) {
    if (employee == 'Rohit') {
      return
    }

    this.employees.push(employee)
  }

  addReport(text: string) {
    this.lastReport = text
    this.reports.push(text)
  }

  printReports() {
    console.log(this.reports)
  }
}


const accounting = new AccountingDepartment('d2', []);

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.printReports();
accounting.printEmployeeInformation();