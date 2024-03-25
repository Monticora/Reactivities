type Combinable = number | string;

const n1 : Combinable = 5;
const n2 : Combinable = 5;

if(typeof n1 === 'number' && typeof n2 === 'number') console.log(n1 + n2);

function add(n1:number, n2: number) :number{
  const result = n1 + n2;
  return result;
}

console.log(add(1,2));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Department{
  name: string;
  protected employees: string[] = [];
  constructor(firstName: string){
    this.name = firstName;
  }

  describe(this: Department){
    console.log('Department: ' + this.name)
  }

  addEmployee(employee: string){
    this.employees.push(employee);
  }

  printEmployeeInformation(){
    console.log(this.employees.length);
    console.log(this.employees);
  }

  getEmployess(){
    return this.employees;
  }
}

const departments = new Department("Departments");
departments.addEmployee("Vlad");
departments.addEmployee("Liza");
departments.addEmployee("Vlad1");
departments.addEmployee("Liza1");
console.log(departments);

class ITDepartment extends Department{
  admins: string[];
  constructor(admins: string[]){
    super("IT Department");
    this.employees = departments.getEmployess();
    this.admins = admins;
  }
}
const itdepartment = new ITDepartment(["Vlad","Liza"]);
console.log(itdepartment);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("_______________________________________________________________________________________________________________")


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////