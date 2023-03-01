import React from 'react'
import { IState as Props } from "../App";

interface IProps {
    people: Props["people"];
  }

const PeopleViewer: React.FC<IProps> = ({ people }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person) => {
          return (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.city}</td>
              <td>{person.id}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PeopleViewer
