class Person {
  name: string;
  age: number;
  occupation: string;
  private_salary: number;

  constructor(
    name: string,
    age: number,
    occupation: string,
    private_salary: number = 0
  ) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.private_salary = private_salary;
  }

  introduce(): string {
    return `Hi, my name is ${this.name}, I am a ${this.occupation}, and I earn ${this.private_salary}`;
  }

  incrementAge(): void {
    this.age++;
  }

  setSalary(salary: number): void {
    this.private_salary = salary;
  }

  getSalary(): number {
    return this.private_salary;
  }
}

const kasperPerson = new Person("Kasper", 27, "tutor");

console.log(kasperPerson.introduce());
console.log(kasperPerson.age);
kasperPerson.incrementAge();
console.log(kasperPerson.age);
kasperPerson.setSalary(100000);
console.log(kasperPerson.getSalary());
console.log(kasperPerson.introduce());

export default Person;