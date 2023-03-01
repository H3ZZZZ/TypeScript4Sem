import React from "react";
import { IState as Props } from "../App";

const PeopleViewer: React.FC<Props> = ({ people }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person) => {
          return (
            <tr key={person.id}>
              <td>
                {" "}
                <img className="List-img" src={person.img} />
              </td>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.city}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PeopleViewer;
