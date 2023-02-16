import Person from "./index";

export function renderPeopleList(
  container: HTMLElement,
  people: Person[]
): void {
  // Create a div element for each person
  const personDivs = people.map((person) => {
    const div = document.createElement("div");
    div.classList.add("person");
    div.innerHTML = `
        <h2 class="person__name">Name: ${person.name}</h2>
        <p class="person__occupation"> Occupation: ${person.occupation}</p>
        <p class="person__age"> Age: ${person.age}</p>
        <p class="person__salary">Salary: ${person.private_salary}</p> `;
    return div;
  });

  // Append the person divs to the container element
  personDivs.forEach((div) => container.appendChild(div));
}

export default renderPeopleList;
