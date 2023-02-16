import getPeople from "./people";
import renderPeopleList from "./peopleList";

const container = document.getElementById("container");

if (container) {
  getPeople()
    .then((people) => {
      renderPeopleList(container, people);
    })
    .catch((error) => {
      console.error(error);
    });
} else {
  console.error("Container element not found");
}
