import { useState, useEffect } from "react";
import "./App.css";
import InputComponent from "./components/InputComponent";
import OutputComponent from "./components/OutputComponent";
import PeopleViewer from "./components/PeopleViewer";

export interface IState {
  people: {
    id: number;
    name: string;
    age: number;
    city: string;
  }[];
}

function App() {
  const [text, setText] = useState<string>("Hej");
  const [people, setPeople] = useState<IState["people"]>([]);

  const fetchPeople = async () => {
    const response = await fetch("http://localhost:3004/person");
    const data = await response.json();
    setPeople(data);
    console.log(data);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <div className="App">
      <InputComponent text={text} setText={setText} />
      <OutputComponent text={text} />
      <PeopleViewer people={people} />
    </div>
  );
}

export default App;
