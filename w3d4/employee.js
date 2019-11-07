class Employee {
  constructor(name, salary, year, month, day) {
    this.name = name;
    this.salary = salary;
    this.hireDate = new Date(year, month - 1, day);
  }
}