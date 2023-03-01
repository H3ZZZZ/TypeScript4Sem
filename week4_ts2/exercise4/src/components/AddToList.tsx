import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    id: "",
    name: "",
    img: "",
    age: "",
    city: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  //   const handleClick = (): void => {
  //     if (!input.name || !input.age) {
  //       return;
  //     }

  //     fetch("http://localhost:3004/person", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         id: parseInt(input.id),
  //         name: input.name,
  //         age: parseInt(input.age),
  //         city: input.city,
  //       }),
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((json) => console.log(json));

  //     setPeople([
  //       ...people,
  //       {
  //         id: parseInt(input.id),
  //         name: input.name,
  //         age: parseInt(input.age),
  //         city: input.city,
  //       },
  //     ]);

  //     setInput({
  //       id: "",
  //       name: "",
  //       age: "",
  //       city: "",
  //     });
  //   };

  const postData = async () => {
    const url = "http://localhost:3004/person";
    const data = {
      id: parseInt(input.id),
      name: input.name,
      img: input.img,
      age: parseInt(input.age),
      city: input.city,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(url, options);
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
    setPeople([
      ...people,
      {
        id: parseInt(input.id),
        name: input.name,
        img: input.img,
        age: parseInt(input.age),
        city: input.city,
      },
    ]);
    setInput({
      id: "",
      name: "",
      img: "",
      age: "",
      city: "",
    });
  };

  const handleRemoveBtn = (): void => {
    // Remove last person from list
    setPeople(people.slice(0, -1));
  };

  const sortByAge = (): void => {
    // Sort by age
    setPeople(
      [...people].sort((a, b) => (a.age > b.age ? 1 : b.age > a.age ? -1 : 0))
    );
  };

  const editPerson = (): void => {
    setPeople((people) =>
      people.map((person) => {
        if (person.id === parseInt(input.id)) {
          return {
            // <-- return new object reference
            ...person, // <-- shallow copy previous state
            name: input.name, // <-- set property value
            age: parseInt(input.age),
            city: input.city,
          };
        }
        return person; // <-- else return previous state
      })
    );
    setInput({
      id: "",
      name: "",
      img: "",
      age: "",
      city: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Id"
        className="AddToList-input"
        value={input.id}
        onChange={handleChange}
        name="id"
      />
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.img}
        onChange={handleChange}
        name="img"
      />
      <input
        type="text"
        placeholder="City"
        className="AddToList-input"
        value={input.city}
        onChange={handleChange}
        name="city"
      />
      <button className="AddToList-btn" onClick={postData}>
        Add to List
      </button>
      <br />
      <button className="AddToList-btn" onClick={handleRemoveBtn}>
        Remove Last person from list
      </button>
      <br />
      <button className="AddToList-btn" onClick={sortByAge}>
        Sort List by Age
      </button>
      <br />
      <button className="AddToList-btn" onClick={editPerson}>
        Edit Person
      </button>
    </div>
  );
};

export default AddToList;
