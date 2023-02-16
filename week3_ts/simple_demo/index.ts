const helloWorld = (name: string): string => {
  return `Hello ${name}`;
};
document.getElementById("root")!.innerHTML = helloWorld("Casper the monkey");

let sortAscending: boolean;

class Person {
  name: string;
  age: number;
  gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

// Create a populator function to populate an array of 10 persons

function populate10People(): Person[] {
  const people: Person[] = [];
  const names: string[] = [
    "Frederik",
    "Casper",
    "Michael",
    "Morten",
    "Long",
    "Kristian",
    "Betul",
    "Denis",
    "Zack",
    "Kristoffer",
  ];
  const genders: string[] = ["male", "female"];
  for (let i = 0; i < 10; i++) {
    const name: string = names[i];
    const age = Math.floor(Math.random() * 50) + 20;
    const gender = genders[Math.floor(Math.random() * genders.length)];
    people.push(new Person(name, age, gender));
  }

  return people;
}

function createPersonTableWithMap(people: Person[]): string {
  const rowsHtml = people
    .map(
      (person) =>
        `<tr><td>${person.name}</td><td>${person.age}</td><td>${person.gender}</td></tr>`
    )
    .join("");

  const tableHtml = `
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    `;

  return tableHtml;
}
const btn = document.getElementById("btn")!;

const sortByAgeAccending = (people: Person[]): Person[] => {
  sortAscending = false;
  return people.sort((a, b) => a.age - b.age);
};

const sortByAgeDecending = (people: Person[]): Person[] => {
  sortAscending = true;
  return people.sort((a, b) => b.age - a.age);
};

const people: Person[] = populate10People();
document.getElementById("root")!.innerHTML += createPersonTableWithMap(people);

btn.addEventListener("click", () => {
  sortAscending = !sortAscending;
  sortAscending
    ? (document.getElementById("root")!.innerHTML = createPersonTableWithMap(
        sortByAgeAccending(people)
      ))
    : (document.getElementById("root")!.innerHTML = createPersonTableWithMap(
        sortByAgeDecending(people)
      ));
});
