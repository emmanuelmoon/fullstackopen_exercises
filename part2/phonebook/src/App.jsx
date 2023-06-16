import { useEffect, useState } from "react";
import axios from "axios";
import NewForm from "./components/NewForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

  console.log("render", persons.length, "persons");

  const addNewPerson = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat({ name: newName, number: newNumber }));
    setNewName("");
    setNewNumber("");
  };

  const changeNewName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const changeNewNumber = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const changeFilterName = (event) => {
    setFilterName(event.target.value);
  };

  return (
    <div>
      <Filter
        persons={persons}
        filterName={filterName}
        changeFilterName={changeFilterName}
      />
      <NewForm
        onSubmit={addNewPerson}
        newName={newName}
        changeNewName={changeNewName}
        newNumber={newNumber}
        changeNewNumber={changeNewNumber}
      />
      <Persons persons={persons} />
    </div>
  );
};

export default App;
