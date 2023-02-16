import Person from "./index";
import data from "./data.js";

function getPeople(): Promise<Person[]> {
  return new Promise((resolve, reject) => {
    try {
      const people = data.map(
        (personData) =>
          new Person(
            personData.name,
            personData.age,
            personData.occupation,
            personData.salary
          )
      );
      resolve(people);
    } catch (error) {
      reject(error);
    }
  });
}

export default getPeople;
